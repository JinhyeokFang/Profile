import styles from '../../styles/profile.module.css'

import TypeScriptBadge from '../../../public/badges/TypeScript.svg'
import NodeJsBadge from '../../../public/badges/Node.js.svg'
import JavaScriptBadge from '../../../public/badges/JavaScript.svg'
import JavaBadge from '../../../public/badges/Java.svg'
import KotlinBadge from '../../../public/badges/Kotlin.svg'

import ExpressJsBadge from '../../../public/badges/Express.js.svg'
import NestJsBadge from '../../../public/badges/Nest.js.svg'
import NextJsBadge from '../../../public/badges/Next.js.svg'
import JestBadge from '../../../public/badges/Jest.svg'
import VueJsBadge from '../../../public/badges/Vue.js.svg'
import SpringBootBadge from '../../../public/badges/SpringBoot.svg'

import GithubBadge from '../../../public/badges/Github.svg'
import NginxBadge from '../../../public/badges/Nginx.svg'
import AwsBadge from '../../../public/badges/Aws.svg'
import DockerBadge from '../../../public/badges/Docker.svg'
import MysqlBadge from '../../../public/badges/Mysql.svg'
import MongodbBadge from '../../../public/badges/Mongodb.svg'
import { Tooltip } from '../tooltip'

export const TechStack = () => {
    return (
      <section>
        <ul className={styles.skillList}>
          <Tooltip
            width='90%'
          >
            <TypeScriptBadge />
          </Tooltip>
          <Tooltip
            width='95%'
          >
            <NodeJsBadge />
          </Tooltip>
          <Tooltip
            width='90%'
          >
            <JavaScriptBadge />
          </Tooltip>
          <Tooltip
            width='50%'
          >
            <JavaBadge />
          </Tooltip>
          <Tooltip
            width='20%'
          >
            <KotlinBadge />
          </Tooltip>
        </ul>
        <ul className={styles.skillList}>
          <Tooltip
            width='100%'
          >
            <ExpressJsBadge />
          </Tooltip>
          <Tooltip
            width='70%'
          >
            <NestJsBadge />
          </Tooltip>
          <Tooltip
            width='40%'
          >
            <NextJsBadge />
          </Tooltip>
          <JestBadge />
          <VueJsBadge />
          <SpringBootBadge />
        </ul>
        <ul className={styles.skillList}>
          <GithubBadge />
          <NginxBadge />
          <AwsBadge />
          <DockerBadge />
          <MysqlBadge />
          <MongodbBadge />
        </ul>
      </section>
    )
}
