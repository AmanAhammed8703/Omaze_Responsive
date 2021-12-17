jQuery.validator.addMethod('mypassword', function(value, element) 
{
   return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
});
    
    

    jQuery("#signup-form").validate({
        rules:{
            uname:{
                required:true, 
                minlength:4
            
            },
            mail:{
                required:true,
                email:true
            },
            pword:{
                required:true,
                minlength: 6,
                mypassword:true
                 
            },
            cword:{
                required: true,
                equalTo: '#pw',
                
            },
           
        },
        messages:{
            uname:{
                required:"Enter your Usrename!", 
                minlength:"should have atleast 4 characters!"
            
            },
            mail:{
                required:"Enter tour emailaddress!",
                email:"Email should contain @!"
            },
            pword:{
                required:"Please enter a password!",
                minlength: "Should be atleast 6 characters!",
                mypassword:"should have character and number!"
                
                 
            },
            cword:{
                required: "Please confirm the password!",
                equalTo: "Password not matching!",
            },
            
        }
    })
