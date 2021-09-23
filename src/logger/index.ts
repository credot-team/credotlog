import winston from 'winston';
import { LevelFontStyle } from '../utils';

export { create } from './createLogger';

export type { Logger } from './logger';

/**
 * 新增訊息 level 的字體樣式 (若與舊有設定重複則覆蓋)
 *
 * @param levelFontStyles ex. { error: 'bold red yellowBG' }
 */
export function addLevelFontStyles(levelFontStyles: { [key: string]: LevelFontStyle }): void {
  winston.addColors(levelFontStyles);
}
