import { ApplicationMetaData } from "@thijmenos/common";
import { Window } from "../window";

export default interface ICreateWindow {
  Application(fileIcon: any | ApplicationMetaData): Window;
  InitWindow(): Window;
}
