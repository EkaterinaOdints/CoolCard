export interface FormValues {
  nfc: string;
  color: string;
  design: string;
  urgent?: boolean;
  frontSidePicture?: FileList;
  backSidePicture?: FileList;
  name: string;
  nameSize: number;
  nameFont: string;
  text: string;
  textSize: number;
  textFont?: string;
}
