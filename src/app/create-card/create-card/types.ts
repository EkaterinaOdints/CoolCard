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
  frontSideText: string;
  frontSideTextSize: number;
  frontSideTextFont?: string;
  cardNumber: string;
  cardPeriod: string;
  backSideText: string;
  backSideTextSize: number;
  backSideTextFont?: string;
}
