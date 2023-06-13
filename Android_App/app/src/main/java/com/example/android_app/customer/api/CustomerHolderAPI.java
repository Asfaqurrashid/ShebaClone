package com.example.android_app.customer.api;

import com.example.android_app.customer.model.AuthData;
import com.example.android_app.customer.model.Customer;
import com.example.android_app.customer.model.UserAuth;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface CustomerHolderAPI {

    @POST("User/signup")
    Call<AuthData> signUp(@Body Customer customer);

    @POST("User/signin")
    Call<AuthData> signIn(@Body UserAuth userAuth);

    @GET("User/{id}")
    Call<Customer> getCustomer();


}
