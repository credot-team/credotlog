import { DefaultLogLevels, LogLevels, syslog } from '../logLevels';
declare type StringKeys<T> = Extract<keyof T, string>;
export declare type RequiredLevels = keyof typeof syslog.levels;
export declare type LogOptions<Levels extends LogLevels> = FixedLogOptions<Levels> & (Exclude<RequiredLevels, keyof Levels> extends never ? LevelMapping<Levels> : Required<LevelMapping<Levels>>);
export declare const DefaultLevelMapping: {
    [p in RequiredLevels]: StringKeys<DefaultLogLevels>;
};
interface FixedLogOptions<Levels extends LogLevels> {
    /**
     * 指定 level <= 何種層級的訊息該被輸出到 console，不指定表示不輸出。 (default: 'info')
     */
    consoleLogLevel?: StringKeys<Levels>;
    /**
     * 指定 level <= debug 的訊息輸出路徑，不指定表示不輸出。
     */
    debugOut?: string;
    /**
     * 指定 level <= info 的訊息輸出路徑，不指定表示不輸出。
     */
    infoOut?: string;
    /**
     * 指定 level <= err 的訊息輸出路徑，不指定表示不輸出。
     */
    errorOut?: string;
    /**
     * 指定檔名中的日期格式。
     * 範例: 'YYYYMMDDHHmmss'
     * (default: 'MMDD')
     */
    filenameDateFormat?: string;
    /**
     * 單一檔案大小限制，格式為[數像][單位]，不指定表示不限制。
     * 例: 100k (100KB), 10m (10MB), 1g (1GB)
     */
    maxSize?: string;
    /**
     * 限制 log 檔最大天數，當 log 檔案超過此限制時會由最舊的檔案開始刪除。不指定表示不限制。
     */
    maxDay?: number;
    /**
     * 設定 Graylog 環境，不指定表示不使用 Graylog
     */
    graylog?: graylogOptions<Levels>;
    /**
     * 指定發生未捕捉例外時，要以何種 level 來記錄錯誤。不指定表示不監聽未捕捉例外。
     */
    exceptionLevel?: StringKeys<Levels>;
}
interface graylogOptions<Levels> {
    /**
     * Graylog 服務位址
     */
    server: {
        host: string;
        port?: number;
    };
    /**
     * 本機名稱 (會被作為 source)
     */
    hostname: string;
    /**
     * 指定 level <= 何種層級的訊息該被輸出到 console Graylog
     */
    level: StringKeys<Levels>;
}
declare type LevelMapping<Levels> = {
    levelMapping?: {
        [p in Exclude<RequiredLevels, keyof Levels>]: StringKeys<Levels>;
    } & {
        [p in Extract<RequiredLevels, keyof Levels>]?: StringKeys<Levels>;
    };
};
export {};