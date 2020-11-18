export const initialState={
   
    basket:[],
    user:null,
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

 const reducer=(state,action)=>{
    //console.log(action);
    switch (action.type){
        case "Set_User":
            return{
                ...state,
                user:action.user,
            }
        case "Add_to_Basket":
            return {
                ...state,
               basket:[...state.basket,action.item],
                
            
            };
        //Logic for adding item to basket
        break;

        case "Delete_to_Basket":
            let newBasket=[...state.basket];

            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Cant remove product(id:${action.id}) as it is not in basket`
                )
            }
            return {
                ...state,
                basket:newBasket
            };
        //Logic for Remove from basket
        break;

        default:
            return state;
    }
}
export default reducer;