import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemocdkcodepipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    //codepipeline
    const democicdpipeline = new CodePipeline(this, 'democicdpipeline', {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('ckgupta/democdkcodepipeline', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npm cdk synth'
        ]
      })
    });
  }
}
