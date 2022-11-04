import { getColorInstance, toIncreaseSaturate, toReduceSaturate } from '@utils/index';

export type ColorSceneType = '' | 'Hover' | 'Pressed' | 'Suppl'
export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type SystemColors = `${ColorType}Color${ColorSceneType}`
export type Colors = Partial<Record<SystemColors, string>>

/**
 * 添加CSS Various 至HTML中
 */
export const AddThemeCssVariousToHtml = (ThemeColors: Colors) => {
  const Keys = Object.keys(ThemeColors);
  const HtmlNode = document.querySelector('html')!;
  // @ts-expect-error
  Keys.forEach((key) => HtmlNode.style.setProperty(`--${key}`, ThemeColors[key]));
};

/**
 * 获取不同场景的颜色值
 * @param color
 * @param type
 */
export const getDifSceneColor = (color: string, type: ColorType) => {
  const SceneList: ColorSceneType[] = ['', 'Hover', 'Pressed', 'Suppl'];
  const SceneColorMap: Colors = {};
  SceneList.forEach((scene) => {
    const ColorKey: SystemColors = `${type}Color${scene}`;
    if (scene === '') SceneColorMap[ColorKey] = color;
    const ColordInstance = getColorInstance(color);
    if (scene === 'Hover') SceneColorMap[ColorKey] = toReduceSaturate(ColordInstance, 0.3);
    if (scene === 'Pressed') SceneColorMap[ColorKey] = toIncreaseSaturate(ColordInstance, 0.5);
    if (scene === 'Suppl') SceneColorMap[ColorKey] = toIncreaseSaturate(ColordInstance, 0.5);
  });
  AddThemeCssVariousToHtml(SceneColorMap);
  return SceneColorMap;
};
