function expression(number, op){
  return !op ? number : op(number);
}

function zero(op) {
  return expression(0, op)
}
function one(op) {
  return expression(1, op)}
function two(op) {
  return expression(2, op)}
function three(op) {
  return expression(3, op)}
function four(op) {
  return expression(4, op)}
function five(op) {
  return expression(5, op)}
function six(op) {
  return expression(6, op)}
function seven(op) {
  return expression(7, op)}
function eight(op) {
  return expression(8, op)}
function nine(op) {
  return expression(9, op)}

function plus(num) {
  return function(num2){
    return num2 + num
  }
}
function minus(num) {
  return function(num2){
    return num2 - num
  }}
function times(num) {
  return function(num2){
    return num2 * num
  }}
function dividedBy(num) {
  return function(num2){
    return Math.floor(num2 / num)
  }}