export function needed (event) {
  var value = event.target.value
  var type = event.type
  var response = false
  if (type === 'focus') {
    response = false
  } else if (value.length === 0 && type === 'blur') {
    response = true
  }
  return response
}
