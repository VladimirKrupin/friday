export default function clear(str, length = 0, entityMap = 0, replases = 0) {
  let result = '';
  //default entityMap
  if (entityMap === 0){
    entityMap = {
      '&': '',
      '<': '',
      '>': '',
      '"': '',
      "'": '',
      '`': '',
      '=': ''
    };
  }
  //default replases
  if (replases === 0) {
    replases = /[&<>"'`=]/g;
  }
  //change simbols
  result = String(str).replace(replases, function (s) {return entityMap[s];}).trim();
  //no action if param length = 0
  if (str.length > length && length !== 0){
    result = result.slice(0, length);
  }
  return result;
}