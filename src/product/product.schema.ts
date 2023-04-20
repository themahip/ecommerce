import {Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PorductDocument= Product & Document;

@Schema()
export class Product{
    @Prop({required:true})
    name:string

    @Prop({required:true})
    price:number

    @Prop()
    description:string

}

export const ProductSchem= SchemaFactory.createForClass(Product);