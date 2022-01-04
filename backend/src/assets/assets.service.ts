import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AssetsService {
  // Initialize S3 Client
  s3 = new S3({
    accessKeyId: process.env.MODELS_BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.MODELS_BUCKET_SECRET_KEY,
    endpoint: process.env.S3_ENDPOINT,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
  });
  async startUpload(filename: string, file: Buffer) {
    return await this.uploadFile(filename, file);
  }

  async uploadFile(filename: string, file: Buffer) {
    // Set info for s3 object
    const params = {
      Bucket: process.env.MODELS_BUCKET,
      Body: file,
      Key: `${filename}`,
    };
    // Upload
    const test = await this.s3.upload(params).promise();
    return test;
  }
  async getFiles(filekeys: string[]) {
    const fileurls = [];
    for (const filekey in filekeys) {
      // Check to see if files have keys set or are null
      if (filekeys[filekey] != null) {
        const params = {
          Bucket: process.env.MODELS_BUCKET,
          Key: filekeys[filekey],
        };
        // Add signedurl to keys
        fileurls.push(this.s3.getSignedUrl('getObject', params));
      } else {
        return filekeys;
      }
    }
    return fileurls;
  }
}
