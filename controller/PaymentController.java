package com.shop.controller;

import com.shop.exception.OrderException;
import com.shop.model.Order;
import com.shop.repository.OrderRepository;
import com.shop.service.OrderService;
import com.shop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tools.jackson.databind.util.JSONPObject;


@RestController
@RequestMapping("/api")
public class PaymentController {
    @Value("${razorpay.api.key}")
    String apiKey;

    @Value("${razorpay.api.secret}")
    String apiSECRET;

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse>createPaymentLink(@PathVariable Long orderId,
                                                                @RequestHeader("Authorization")String jwt) throws OrderException {
        Order order=orderService.findOrderById(orderId);
        try{
            RazorpayClient razorpay=new RazorpayClient(apiKey,apiSECRET);
            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount",order.getTotalPrice()*100);
            paymentLinkRequest.put("currency","INR");

            JSONObject customer=new JSONObject();
            customer.put("name",order.getUser().getFirstName());
            customer.put("email",order.getUser().getEmail());
            paymentLinkRequest.put("notify",notify);

            paymentLinkRequest.put("callback_url","http://localhost:3000/payment/"+OrderId());
            paymentLinkRequest.put("callback_method","get");

            paymentLink payment =razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId=payment.get("id");
            String paymentLinkUrl=payment.get("short_url");

            PaymentLinkResponse res=new PaymentLinkResponse();
            res.setPayment_link_id(paymentLinkId);
            res.setPayment_link_url(paymentLinkUrl);

            return new ResponseEntity<PaymentLinkResponse>(res,HttpStatus.CREATED);


            JSONOject notify-new JSONOject();
            notify.put("sms",true);
            notify.put("email",true);
        }catch (Exception e){
            throw new RazorpayException(e.getMessage());
        }


        return null;
    }
    public ResponseEntity<ApilResponse>redirect(@RequestParam(name = "payment_id")String payment,
                                                @RequestParam(name = "order_id")Long orderId)throws OrderException{
        Order order=orderService.findOrderById(orderId);
        RazorpayClient razorpay=new RazorpayClient(apiKey,apiSECRET);

        System.out.println("payment id"+paymentId+"-order id"+orderId)
        try {
            Payment payment1=razorpay.payment.fetch(payment);

            if (payment1.get("status").equals("captured")){
                order.getPaymentDetails().setPaymentId(paymentId);
                order.getPaymentDetails().setStatus("COMPLETED");
                order.setOrderStatus("PLACED");
                orderRepository.save(order);
            }
            ApiResponse res=new ApiResponse();
            res.setMessage("your order get placed");
            res.setStatus(true);

           return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);

        }catch (Exception e){
            throw new RazorpayException(e.getMessage());
        }
        return null;
    }
}
