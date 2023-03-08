var num = prompt('введите число');
var exp = prompt('введите степень');
var result = 1;
var cnt = 0;
while(cnt < exp) {
	result *= num;
	cnt++;
}
alert(result);