export interface FormValues {
  nfc: string;
  color: string;
  design: string;
  urgent?: boolean;
  frontSidePicture?: FileList;
  backSidePicture?: FileList;
  name: string;
  nameSize: number;
}
