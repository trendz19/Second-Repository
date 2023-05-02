import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receivedMessage
   @wire(MessageContext)
   context
   
   connectedCallback(){
      this.subscribeMessage()
   }

   subscribeMessage(){
       subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE} )
   }
   
   handleMessage(message){
      this.receivedMessage =message.lmsData.value? message.lmsData.value :"No Message published"
   }
}