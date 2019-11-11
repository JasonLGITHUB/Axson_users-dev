
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var fullname   = $("#fullname").val();        
        var email      = $("#email").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var dob        = $("#dob").val();
        var country    = $("#country").val();
        var gender     = $('input[name="gender"]:checked').val(); 
        var company   =  $("#company").val();
        var company_web =$("#company_web").val();
        var company_address =$("#company_address").val();
        var company_product =$("#company_product").val();
        var owner_manager_name =$("#owner_manager_name").val();

        var owner_manager_address =$("#owner_manager_address").val();
        var owner_country =$("#owner_country").val();
        var owner_SSN_EIN =$("#owner_SSN_EIN").val();
        var owner_passport =$("#owner_passport").val();
        var owner_email =$("#owner_email").val();
        var owner_skypeid =$("#owner_skypeid").val();        

        var customer_support_name =$("#customer_support_name").val();
        var customer_support_phone=$("#customer_support_phone").val();
        var customer_support_email=$("#customer_support_email").val();
        
        var accept_credit_cards =$("#accept_credit_cards").val();
        var processed_before =$("#processed_before").val();
        var acct_terminated =$("#acct_terminated").val();
        var time_with_processor =$("#time_with_processor").val();
        var current_processor =$("#current_processor").val();
        var heard_about_us =$("#heard_about_us").val();  
        var agent_name =$("#agent_name").val(); 
        var monthly_sales =$("#monthly_sales").val();
        var times_transaction =$("#times_transaction").val();
        var max_ticket_value =$("#max_ticket_value").val();
        var min_ticket_value =$("#min_ticket_value").val();

        var serviceH    = $('input[name="serviceH"]:checked').val(); 
        var serviceL     = $('input[name="serviceL"]:checked').val();
        
        var terms      = $('input[name="terms"]:checked').val();
       

        if(!fullname ||!company|| !email || !password || !cpassword || !dob || !country || !gender){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
        } else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
        }
        else{ 
            $.ajax({
                url: "/register",
                method: "POST",
                data: { full_name: fullname, email: email, password: password, cpassword: cpassword, dob: dob, country: country, gender: gender, 
                       company: company, company_web: company_web, company_address: company_address, company_product: company_product, owner_manager_name: owner_manager_name, 
                       owner_manager_address: owner_manager_address, owner_country: owner_country, owner_SSN_EIN:owner_SSN_EIN,  owner_passport: owner_passport, 
                       owner_email: owner_email, owner_skypeid: owner_skypeid, customer_support_name: customer_support_name, customer_support_phone: customer_support_phone, 
                       customer_support_email: customer_support_email, accept_credit_cards:accept_credit_cards, processed_before: processed_before, acct_terminated:acct_terminated, 
                       time_with_processor:time_with_processor, current_processor:current_processor, heard_about_us: heard_about_us, agent_name:agent_name, monthly_sales:monthly_sales,
                       times_transaction:times_transaction, max_ticket_value: max_ticket_value, min_ticket_value: min_ticket_value, serviceH:serviceH, serviceL:serviceL, terms: terms }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});