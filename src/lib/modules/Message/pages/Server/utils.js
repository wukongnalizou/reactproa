export function dataFilter(searchSelected, userAll, deafultSelectedRowKeys) {
  let filterList = []
  switch (searchSelected) {
    case 'checked':
      userAll.map((v) => {
        if (deafultSelectedRowKeys.indexOf(v.id) !== -1) filterList.push(v)
        return null
      })
      break;
    case 'unchecked':
      userAll.map((v) => {
        if (deafultSelectedRowKeys.indexOf(v.id) === -1) filterList.push(v)
        return null
      })
      break;
    default:
      filterList = userAll
      return filterList
  }
  return filterList
}

export function commonSearch(inputValue, filter, type, filterColumns, user, userAll) {
  if (type === 'all') {
    return inputValue ? filter(userAll, filterColumns) : userAll;
  } else {
    return inputValue ? filter(user, filterColumns) : user
  }
}

export const valueObj2FormValues = (valueObj, keys, fields) => {
  const result = {}
  keys = keys || Object.keys(valueObj)
  keys.forEach((key) => {
    if (fields && fields[key] && fields[key].value === valueObj[key]) {
      result[key] = fields[key];
    } else {
      result[key] = {
        value: valueObj[key]
      }
    }
  })
  return result
}