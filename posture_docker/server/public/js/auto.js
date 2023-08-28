d3.select("#myGraph")
.selectAll("rect")//data를 적용할 svg 요소지정
.data(dataSet) //data설정
.enter() //데이터 수에 따라 rect 요소 생성
.append("rect")//사각형생성

.attr("width",function(d,i){
	return d + "px";
    }) //그래프 넓이 지정
.attr("y",function(d,i){
	return i * 25;
    }) //그래프 데이터셋 위치를 이용하여 y좌표 변경

var dataSet = [400,200,90,190,240];

d3.select("#myGraph") //svg 요소 선택
.selectAll("rect")
.data(dataSet)
.enter()
.append("rect")
.attr("x",0)
.attr("y",function(d,i){
    return i * 25;
})
.attr("width",function(d,i){
    return d + "px";
})
.attr("height","20px")