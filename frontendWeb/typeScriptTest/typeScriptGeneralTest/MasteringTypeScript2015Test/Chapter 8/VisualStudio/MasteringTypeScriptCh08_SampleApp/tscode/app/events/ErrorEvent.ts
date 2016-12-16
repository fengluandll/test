 export interface IErrorEvent {
     Message: string;
     Description: string;
 }

 export class IIErrorEvent implements IInterfaceChecker {
     propertyNames: string [] = ["Message", "Description"];
     className: string = "IIErrorEvent";
 }

 export class ErrorEvent implements IErrorEvent {
     Message: string;
     Description: string;
     constructor(message: string, description: string) {
         this.Message = message;
         this.Description = description;
     }
 }

 export interface IErrorEvent_Handler {
     handle_ErrorEvent(event: IErrorEvent);
 }

 export class IIErrorEvent_Handler implements IInterfaceChecker {
     methodNames: string[] = ["handle_ErrorEvent"];
     className: string = "IIErrorEvent_Handler";
 }
