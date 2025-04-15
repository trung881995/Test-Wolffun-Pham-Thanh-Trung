// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

export interface CSVRecord {
  [key: string]: string;
}

export class CSVLoader {
  /**
   * Parse raw CSV string thành mảng object.
   */
  static parse(csvText: string): CSVRecord[] {
    const lines = csvText.trim().split("\n");
    const headers = lines[0].split(",");

    const records: CSVRecord[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(",");
      const record: CSVRecord = {};

      headers.forEach((header, idx) => {
        record[header.trim()] = line[idx].trim();
      });

      records.push(record);
    }

    return records;
  }

  /**
   * Tải CSV từ folder resources/configs/
   */
  static async load(filename: string): Promise<CSVRecord[]> {
    return new Promise((resolve, reject) => {
      cc.resources.load(
        `configs/${filename}`,
        (err: Error | null, asset: cc.TextAsset) => {
          if (err) {
            console.error("Load CSV failed:", err);
            reject(err);
            return;
          }
          const data = this.parse(asset.text);
          resolve(data);
        }
      );
    });
  }
}
