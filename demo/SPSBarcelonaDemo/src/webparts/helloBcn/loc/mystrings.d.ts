declare interface IHelloBcnStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloBcnStrings' {
  const strings: IHelloBcnStrings;
  export = strings;
}
