function fill()
{
    var city = document.getElementById("city_i").value,
        city_arabia = document.getElementById("city_arabia_i").value ,
        date  = document.getElementById("date_i").value ,
        company_name = document.getElementById("company_name_i").value ,
        line1 = document.getElementById("line1_i").value ,
        adress = document.getElementById("adress_i").value ,
        capital = document.getElementById("capital_i").value ,
        actions_total = document.getElementById("actions_total_i").value , 
        mr_name = document.getElementById("mr_name_i").value ,
        mrs_name = document.getElementById("mrs_name_i").value,
        action1 = document.getElementById("action1_i").value , 
        action2 = document.getElementById("action2_i").value ,
        rc = document.getElementById("rc_i").value ,
        city_arr = document.getElementsByClassName("city");


    document.getElementById("city_arabia").innerHTML = city_arabia ;
    document.getElementById("date").innerHTML = date ;
    document.getElementById("company_name").innerHTML = company_name ;
    document.getElementById("line1").innerHTML = line1 ;
    document.getElementById("adress").innerHTML = adress ;
    document.getElementById("capital").innerHTML = capital ;
    document.getElementById("actions_total").innerHTML = "(" + actions_total +")";
    document.getElementById("mr_name").innerHTML = mr_name ;
    document.getElementById("mrs_name").innerHTML = mrs_name ;
    document.getElementById("action1").innerHTML = action1 ;
    document.getElementById("action2").innerHTML = action2 ;
    document.getElementById("rc").innerHTML = rc;

    //fill the city
    for (let index = 0; index <=6 ; index++) {
        city_arr[index].innerHTML = city
    };

    document.getElementById("mr_name_reverse").innerHTML = mr_name.split(" ").reverse().join(" ");
}

function lines()
{
    var line2 = document.getElementById("line2_i").value ;
        
        
        if(line2 !== "")
        {
            var line2Li =document.createElement('li');
            line1.append(line2Li);
            line2Li.append(line2);
        }
        line2 == "";
}

document.getElementById("clear").onclick=function(e){
    e.preventDefault();
    document.getElementById('form').remove();
}


