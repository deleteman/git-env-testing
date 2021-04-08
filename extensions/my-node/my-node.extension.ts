import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { NodeAspect, NodeMain } from '@teambit/node'

/* const newDependencies = {
  devDependencies: {
    '@types/jest': '~26.0.9',
    '@types/express': '*',
    'express': '*'
  }
}*/

export class MyNodeExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect]

  static async provider([envs, node]: [EnvsMain, NodeMain]) {
    const MyNodeEnv = node.compose([
     // node.overrideDependencies(newDependencies)
    ])

    envs.registerEnv(MyNodeEnv)

    return new MyNodeExtension(node)
  }
}
