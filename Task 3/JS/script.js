function convertion()
{
    let Value=document.getElementById("degree").value;
    let display_result=0;
    let selected_type=document.getElementById("type").value;
    let result=0;
    if(isNaN(Value))
    {
        alert("Enter a Valid Number");
    }
    else
    {
        Value=Number.parseInt(Value);
    }

    if(selected_type=="C-F" && !isNaN(Value))
    {
        result=((Value*9/5)+32).toFixed(4);
        result=result+" ℉";
        display_result=document.getElementById("output").value=result;
    }

    else if(selected_type=="C-K" && !isNaN(Value))
    {
        result=(Value+273.15).toFixed(4);
        result=result+" K";
        display_result=document.getElementById("output").value=result;
    }

    else if(selected_type=="F-C" && !isNaN(Value))
    {
        result=((Value-32)*5/9).toFixed(4);
        result=result+" ℃";
        display_result=document.getElementById("output").value=result;
    }
    
    else if(selected_type=="F-K" && !isNaN(Value))
    {
        result=(((Value-32)*5/9)+273.15).toFixed(4);
        result=result+" K";
        display_result=document.getElementById("output").value=result;
    }

    else if(selected_type=="K-C" && !isNaN(Value))
    {
        result=(Value-273.15).toFixed(4);
        result=result+" ℃";
        display_result=document.getElementById("output").value=result;
    }

    else if(selected_type=="K-F" && !isNaN(Value))
    {
        result=(((Value-273.15)*9/5)+32).toFixed(4);
        result=result+" ℉";
        display_result=document.getElementById("output").value=result;
    }
    

    
}