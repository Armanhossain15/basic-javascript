const result = 77;

if (result >= 80){
    console.log('You got A+');
}
else if(result<=79 && result >=70){
    console.log('You got A-');
}
else if(result<=69 && result >=60){
    console.log('You got A');
}
else if(result<=59 && result >=50){
    console.log('You got B');
}
else if(result<=49 && result >=40){
    console.log('You got C');
}
else{
    console.log('You Fail (F)')
}