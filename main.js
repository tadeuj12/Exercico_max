 let  soma  =  0
 deixe  titulo  =  documento . createElement ( 'h2' )
função  venda ( ) {
  deixe  valor  =  documento . querySelector ( 'input' ) . valor
  deixe  div  =  documento . querySelector ( 'div' )
  valor  =  parseInt ( valor )
   if  ( valor  ==  10  ||  valor  ==  25 )  {
     soma  + =  valor
       titulo . innerHTML  = `Valor inserido $ { soma } `
       div . appendChild ( título )
     if ( soma  ===  45 ) {
       titulo . innerHTML  = `Aposentar uma coca cola`
       div . appendChild ( título )
       soma  =  0
       
        } senão  se ( soma  >  45 ) {
          console . log ( 'soma' ,  soma )
          console . log ( 'valor' ,  valor )
          titulo . innerText = `Nao devolvo troco`
          div . appendChild ( título )       
          soma  =  0
        }
     
   } mais {
      titulo . innerText = `Valor $ { valor } inserido não é válido, a maquina aceita 10 ou 25`
        div . appendChild ( título )   
     soma  =  0
   }
  
  
}
