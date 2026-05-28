 //ES6 --> object 
 // //comst obj = new object()

 const obj ={
    name:"최민준",
    age: 27 ,
    //오브젝트내에서는 함수추가 가능(메서드)\
    //함수값이 다를수도 있기대문에
    //겍체내 데이터속성은 프로퍼티 함수는 메서드 라고부른다.
    sayHello: function(msg){
        console.log("안녕하세요." + msg);
    },
 };
 obj.sayHello("aihgjg");
 //겍체 에 추가 
 obj.gander = "male"
 //겍체에서 삭제 
 delete obj.gander;
 //겍체에서 수정
 obj.age =28

 obj["age"] == obj.age

 console.log(obj)
 
 let id ="im"
 let pw = "1234"
 const credentials = {
    id,
    pw,
 };
 console.log(credentials)