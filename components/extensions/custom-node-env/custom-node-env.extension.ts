import {EnvsMain, EnvsAspect} from '@teambit/envs'
import {NodeMain, NodeAspect} from '@teambit/node'
// ...
const newDependencies = {
    devDependencies: {
      '@types/jest': '~26.0.9',
      '@types/express': '*',
      'express': '*'
    }
  }
  
  export class CustomNode {
    // ...
    constructor(private node: NodeMain) {}
    static dependencies: any = [EnvsAspect, NodeAspect];

    static async provider([envs, node]: [EnvsMain, NodeMain]) {
      console.log("------LALALALALA---------------")
      const newNodeEnv = node.compose([
        node.overrideDependencies(newDependencies)
      ])
      envs.registerEnv(newNodeEnv)
      return new CustomNode(node)
      // ...
    }
  }
