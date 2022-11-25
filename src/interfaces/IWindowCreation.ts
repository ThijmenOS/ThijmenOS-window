import { ApplicationMetaData } from "@thijmen-os/common";
import { Window } from "../window";

export default interface ICreateWindow {
  Application(fileIcon: any | ApplicationMetaData): Window;
}
