function intactify (depe_, list_) {
  // list_:components Array
  // depe_:obj value Array
  var length = list_.length;
  var _list = list_.concat();
  // 有相关依赖的组件
  var _l = list_.filter(val => {
    console.log(val);
    for (var key in depe_) {
      if (Object.prototype.hasOwnProperty.call(depe_, key)) {
        const value = depe_[key]
        console.log(value);
        if (value === val) {
          return true
        }
      }
    }
    return false
  })
  _l.forEach(val => {
    // 依赖去重
    const needPush = depe_[val].filter(item => _list.indexOf(item) === -1)
    // 将新依赖推入数组
    _list.push.apply(_list, needPush)
  })
  // 如果数组长度没有发生变化，说明没有新的相关依赖组件
  if (length === _list.length) {
    // 赋值
    return _list
  }
  return intactify(depe_, _list)
}

var arr=['s','a','b'];
var o ={
    'a':['a'],
    'c':['d']
}
intactify(o,arr);