export const excerpt = (desc: string, num: number) => {
  if (desc.length < num) return desc;
  return desc.slice(0, num) + "...";
};

export const formatDate = (val: any) => {
  const date = new Intl.DateTimeFormat("en-uk", {
    timeStyle: "short",
    dateStyle: "full",
  });

  return date.format(val);
};

export const setCustomValue = (
  setValue: any,
  key: string,
  value: string | string[]
) => {
  setValue(`${key}`, value, {
    shouldDirty: true,
    shouldTouch: true,
    shouldValidate: true,
  });
};
