
function graphD()
{
var dataSet = [10,10,10,10];
var ttext = "text"

d3.select("#myGraph") //svg 요소 선택
.append("rect") //svg 사각형 생성
.attr("x",0) //x 좌표 0으로 설정
.attr("y",0) //y 좌표 0으로 설정
.attr("width",dataSet[0]) // dataSet의 1번째 400을 기반으로 넓이 설정
.attr("height","25px") // 높이 20px로 설정
.attr('fill', '#BDBDBD')

d3.select("#myGraph") //svg 요소 선택
.append("rect") //svg 사각형 생성
.attr("x",0) //x 좌표 0으로 설정
.attr("y",50) //y 좌표 25으로 설정
.attr("width",dataSet[1]) // dataSet의 2번째 200을 기반으로 넓이 설정
.attr("height","25px") // 높이 20px로 설정
.attr('fill', '#5882FA')

d3.select("#myGraph") //svg 요소 선택
.append("rect") //svg 사각형 생성
.attr("x",0) //x 좌표 0으로 설정
.attr("y",100) //y 좌표 50으로 설정
.attr("width",dataSet[2]) // dataSet의 3번째 90을 기반으로 넓이 설정
.attr("height","25px") // 높이 20px로 설정
.attr('fill', '#FA5858')

d3.select("#myGraph") //svg 요소 선택
.append("rect") //svg 사각형 생성
.attr("x",0) //x 좌표 0으로 설정
.attr("y",150) //y 좌표 75으로 설정
.attr("width",dataSet[3]) // dataSet의 4번째 190을 기반으로 넓이 설정
.attr("height","25px") // 높이 20px로 설정
.attr('fill', '#FA58F4')

}