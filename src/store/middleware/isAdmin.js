
const currentUser={
    name:'amine',
    isAdmin:false
}


const isAdmin=store=>next=>action=>{
   if(currentUser.isAdmin)
   {
    next(action)
   }
}

export default isAdmin