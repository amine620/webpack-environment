
const currentUser={
    name:'amine',
    isAdmin:true
}


const isAdmin=store=>next=>action=>{
   if(currentUser.isAdmin)
   {
    next(action)
   }
}

export default isAdmin