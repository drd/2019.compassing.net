import fs from 'fs'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    console.log(process.cwd())
    const publicDir = "./public"
    const experiments = fs.readdirSync(publicDir)
      .map(name => ({name, path: `${publicDir}/${name}`}))
      .filter(exp => fs.lstatSync(exp.path).isDirectory())

    return [
      {
        path: '/experiments',
        component: 'src/pages/experiments',
        getData: () => ({
          experiments,
        }),
      },
    ]
  },
}
