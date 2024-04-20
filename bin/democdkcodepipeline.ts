#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemocdkcodepipelineStack } from '../lib/democdkcodepipeline-stack';

const app = new cdk.App();
new DemocdkcodepipelineStack(app, 'DemocdkcodepipelineStack', {
  env: {account: '623962217654', region: 'us-west-2'},
});