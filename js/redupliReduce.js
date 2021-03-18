let data = [
    {
        id : 1,
        name : "hi"
    },
    {
        id : 1,
        name : "hi"
    },
    {
        id : 2,
        name : "hello"
    },
    {
        id : 2,
        name : "hello"
    },
    {
        id : 3,
        name : "hi"
    }
]

/**
 * 1. reduce some 
 */
const unique_user = data.reduce((prev, now) => {
    if (!prev.some(obj => obj.id === now.id ))   prev.push(now);
        return prev;
  }, []);
  
console.log(unique_user)





/**
 * 2. filter  - 2.1 find
 *            - 2.2 some
 */
let retArr = []
data.filter((origin, index) => {
            // if(!retArr.find((_retData, _retIndex) => origin.id === _retData.id && index !== _retIndex)) retArr.push(origin)
            if(!retArr.some((_retData, _retIndex) => origin.id === _retData.id && index !== _retIndex)) retArr.push(origin)
    }
)

console.log(retArr)
