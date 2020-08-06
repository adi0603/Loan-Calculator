function showpay() {
 if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
     (document.calc.months.value == null || document.calc.months.value.length == 0)||
     (document.calc.rate.value == null || document.calc.rate.value.length == 0))
 	{ document.calc.pay.value = "Incomplete data";
 	}
 	else
 	{
 var princ = document.calc.loan.value;
 var term  = document.calc.months.value;
 var intr   = document.calc.rate.value / 1200;
 
 var cal = princ * intr / (1 - (Math.pow(1/(1 + intr), term)));
 
 document.calc.pay.value=cal.toFixed(3);
 }
}