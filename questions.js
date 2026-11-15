/*
 * Vibe Coding / AI 全栈 · 面试题库
 * 题型：single（单选）、multiple（多选）、judge（判断）
 * answer：正确选项的下标数组（从 0 开始）
 * 判断题 options 固定为 ["正确", "错误"]
 */
window.QUESTION_BANK = [
  /* ==================== 一、AI 编程工具 ==================== */
  {
    id: 'ai-01',
    level: '高',
    difficulty: '基础',
    category: 'AI 编程工具',
    type: 'single',
    question: 'Claude Code 相比传统的代码补全工具，最核心的优势是什么？',
    options: [
      '只能补全单行代码',
      '能理解整个项目上下文，跨文件完成较复杂的任务',
      '只能生成代码注释',
      '生成代码后不需要人工审查'
    ],
    answer: [1],
    explanation: 'Claude Code 是 Agent 型工具，能读取项目文件、跨文件修改、执行命令、运行测试，适合完成一个完整任务；传统补全工具主要解决光标附近的局部代码。能力越强越需要人工 review，绝不能跳过测试和安全检查。'
  },
  {
    id: 'ai-02',
    level: '中',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'multiple',
    question: '审查 AI 生成的代码时，应该重点检查哪些方面？',
    options: [
      '安全性：SQL 注入、越权、密钥泄露',
      '正确性：边界条件、并发、事务、幂等',
      '性能：索引、N+1 查询、内存占用',
      '可维护性：命名、分层、重复代码、可测试性'
    ],
    answer: [0, 1, 2, 3],
    explanation: '四个维度都要看。AI 代码最常见的毛病是"看起来能跑，但边界和异常没处理"，所以安全、正确性、性能、可维护性缺一不可。审查完还要用测试和实际运行验证。'
  },
  {
    id: 'ai-03',
    level: '高',
    difficulty: '基础',
    category: 'AI 编程工具',
    type: 'single',
    question: '项目根目录的 CLAUDE.md 主要作用是什么？',
    options: [
      '自动创建数据库表',
      '给 AI 提供项目级上下文和规范，减少每次重复说明',
      '代替单元测试',
      '自动加密源代码'
    ],
    answer: [1],
    explanation: 'CLAUDE.md 相当于写给 AI 的"项目说明书"，里面可以写技术栈、目录结构、启动命令、编码规范、禁止事项。有了它，AI 每次会话都能快速进入项目语境，减少上下文缺失导致的错误。'
  },
  {
    id: 'ai-04',
    level: '高',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'single',
    question: '使用 AI 编程工具时，上下文管理的最佳做法是？',
    options: [
      '把整个仓库的所有文件都塞给 AI',
      '只提供与当前任务相关的文件、接口、报错和规范',
      '每次新开对话，不给任何背景',
      '让 AI 自己猜项目结构'
    ],
    answer: [1],
    explanation: '上下文不是越多越好。无关文件会稀释重点、增加 token 成本和出错概率。正确做法是精准提供相关文件、接口定义、表结构、错误日志和验收标准，再配合 CLAUDE.md 固化的项目规范。'
  },
  {
    id: 'ai-05',
    level: '高',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'single',
    question: '把复杂需求交给 AI 时，最有效的拆解方式是什么？',
    options: [
      '一次性描述所有需求，让 AI 一次写完',
      '拆成可独立运行、可验证的小任务，逐个完成',
      '只给一句话，让 AI 自由发挥',
      '先写一份几千字的文档再说'
    ],
    answer: [1],
    explanation: '任务拆解的核心是"每一步都能验证"。按接口、页面、修复点拆成小任务，每完成一步就运行和测试，出错时容易定位。一次性让 AI 写一大坨，出了问题很难判断是哪一步错了。'
  },
  {
    id: 'ai-06',
    level: '高',
    difficulty: '基础',
    category: 'AI 编程工具',
    type: 'judge',
    question: 'AI 生成的代码只要编译通过，就可以直接上线。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '编译通过只说明语法没问题，不代表逻辑正确、安全、性能达标。上线前必须经过代码审查、单元测试/接口测试、安全检查和灰度验证。AI 代码尤其容易漏掉边界条件、异常处理和权限校验。'
  },
  {
    id: 'ai-07',
    level: '中',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'single',
    question: '衡量 AI 编程提效，最合理的指标是哪一组？',
    options: [
      '生成代码的行数',
      '交付周期、返工率、缺陷率、review 时间',
      '消耗了多少 token',
      '对话了多少轮'
    ],
    answer: [1],
    explanation: '行数和 token 数不代表价值，甚至可能是"写得越多、改得越多"。真正有意义的指标是交付周期是否缩短、返工率是否下降、线上缺陷率是否可控、人工 review 时间是否合理。面试时给数字也要能解释来源。'
  },
  {
    id: 'ai-08',
    level: '高',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'multiple',
    question: 'AI 辅助开发可能引入哪些安全风险？',
    options: [
      '拼接用户输入导致 SQL 注入',
      '把密钥、密码硬编码进代码',
      '缺少权限校验导致越权访问',
      '引入存在已知漏洞的第三方依赖'
    ],
    answer: [0, 1, 2, 3],
    explanation: '这四类都是 AI 生成代码的高频问题。AI 更关注"功能能跑"，容易忽略参数化查询、权限校验、敏感信息脱敏和依赖版本安全。审查时要专门过一遍安全清单。'
  },
  {
    id: 'ai-09',
    level: '中',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'judge',
    question: '给 AI 的上下文越长越好，信息越多它理解得越准。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '上下文过长会带来三个问题：无关信息稀释重点、超出模型窗口被截断、成本和延迟上升。正确做法是给"相关且必要"的信息，并用 CLAUDE.md、计划文件等方式固化关键约束。'
  },
  {
    id: 'ai-10',
    level: '中',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'single',
    question: 'Claude Code 的"计划模式"（先出方案再改代码）主要解决什么问题？',
    options: [
      '让 AI 自动部署上线',
      '避免 AI 一上来大范围乱改，先对齐方案和影响范围',
      '提高网络下载速度',
      '自动生成单元测试'
    ],
    answer: [1],
    explanation: '复杂任务直接让 AI 改代码，容易出现"改错文件、动到无关逻辑、方案方向不对"的问题。先让它列改动点、风险、验证方式，你确认后再执行，能显著降低返工。'
  },
  {
    id: 'ai-11',
    level: '低',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'multiple',
    question: '关于 Cursor、Claude Code、Codex 这类工具的定位，说法正确的是？',
    options: [
      'Cursor 侧重 IDE 内的补全和局部修改',
      'Claude Code 侧重任务级、跨文件的 Agent 操作',
      'Codex 类工具常用于函数或片段级代码生成',
      '它们完全互斥，同一个项目只能用其中一个'
    ],
    answer: [0, 1, 2],
    explanation: '三类工具定位不同但可以配合使用：Cursor 适合边写边改，Claude Code 适合完整任务和多文件重构，Codex 类工具适合片段生成。实际工作流常常是组合使用，而不是二选一。'
  },
  {
    id: 'ai-12',
    level: '中',
    difficulty: '进阶',
    category: 'AI 编程工具',
    type: 'single',
    question: '团队要推广 AI 编程工具，最合理的做法是？',
    options: [
      '一刀切禁止，避免风险',
      '不加审查，直接用 AI 写生产代码',
      '先自己用出效果，再沉淀规范（review 清单、prompt 模板、安全要求）',
      '只让新员工使用'
    ],
    answer: [2],
    explanation: '推广的关键是"先证明有效，再形成规范"。规范至少包括：AI 代码必须 review、关键逻辑必须测试、敏感信息不能进 prompt、生成代码要过静态扫描。一刀切禁止或放任不管都不可取。'
  },

  /* ==================== 二、Prompt 与代码审查 ==================== */
  {
    id: 'pr-01',
    level: '高',
    difficulty: '基础',
    category: 'Prompt 与代码审查',
    type: 'multiple',
    question: '一个结构化的 Prompt 通常包含哪些要素？',
    options: [
      '角色：让 AI 以什么身份工作',
      '任务：要完成什么，一句话说清',
      '上下文与约束：相关文件、技术栈、规范、不能改什么',
      '输出格式与验收标准：要代码还是方案，怎样算完成'
    ],
    answer: [0, 1, 2, 3],
    explanation: '角色、任务、上下文、约束、输出格式、验收标准，合起来就是"六要素"。要素越明确，AI 跑偏的概率越低，返工越少。'
  },
  {
    id: 'pr-02',
    level: '中',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'single',
    question: '长对话中上下文被"污染"，最有效的处理方式是？',
    options: [
      '继续堆更多信息，让 AI 自己分辨',
      '分阶段总结，必要时开新会话并带上结论和关键文件',
      '重启电脑',
      '让 AI 忘记前面的内容'
    ],
    answer: [1],
    explanation: '上下文被污染时，继续堆信息只会更乱。正确做法是让 AI 总结已确认的结论、关键文件和待办，然后开新会话从干净上下文继续，把结论带过去。'
  },
  {
    id: 'pr-03',
    level: '高',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'single',
    question: '任务拆解的核心原则是什么？',
    options: [
      '任务越大越好，减少沟通',
      '每个任务可独立验证，能运行、能测试',
      '只按文件数量拆',
      '只按开发时间拆'
    ],
    answer: [1],
    explanation: '"可验证"是拆解的第一原则。一个任务如果能单独运行、单独测试，出错时就能快速定位。按文件或时间拆，往往拆出来的是"半成品"，无法验证。'
  },
  {
    id: 'pr-04',
    level: '高',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'multiple',
    question: '代码审查通常分为哪四层？',
    options: ['安全', '正确性', '性能', '可维护性'],
    answer: [0, 1, 2, 3],
    explanation: '安全看注入、越权、密钥；正确性看边界、并发、事务、幂等；性能看索引、N+1、内存和锁；可维护性看命名、分层、重复和可测试性。四层都过一遍，才算完整审查。'
  },
  {
    id: 'pr-05',
    level: '中',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'judge',
    question: '让 AI 先复述它对需求的理解，再开始写代码，可以减少偏差。',
    options: ['正确', '错误'],
    answer: [0],
    explanation: '这是很有效的一步。AI 复述时，你能立刻发现它理解错了哪些点，及时纠正，比等代码写完再返工成本低得多。复杂需求尤其建议这么做。'
  },
  {
    id: 'pr-06',
    level: '中',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'single',
    question: '长任务中，防止 AI "忘记"关键决策的有效做法是？',
    options: [
      '完全依赖对话记忆',
      '把决策写进 PLAN.md、CLAUDE.md 等文件，持续引用',
      '每次重新解释一遍',
      '尽量减少对话轮数'
    ],
    answer: [1],
    explanation: '对话记忆会随着上下文变长而衰减。把架构决策、接口约定、待办和验收标准写进文件，让 AI 每次都读取，既稳定又方便团队共享。'
  },
  {
    id: 'pr-07',
    level: '高',
    difficulty: '基础',
    category: 'Prompt 与代码审查',
    type: 'single',
    question: '判断 AI 任务完成的最好标准是？',
    options: [
      '代码看起来写得不错',
      '能运行、测试通过、符合验收标准',
      '代码行数足够多',
      'AI 自己说完成了'
    ],
    answer: [1],
    explanation: 'AI 说"完成了"不算数，代码好看也不等于正确。要有可执行的验收：能跑起来、测试通过、满足需求和规范。能自动化的验收尽量自动化。'
  },
  {
    id: 'pr-08',
    level: '中',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'multiple',
    question: '减少 AI 幻觉（一本正经地胡说）的手段包括？',
    options: [
      '提供准确的上下文、文档和代码',
      '要求给出引用来源或依据',
      '用测试、运行结果和外部资料验证',
      '完全相信 AI 的记忆'
    ],
    answer: [0, 1, 2],
    explanation: '幻觉来自信息不足或模型过度自信。给准确上下文、要求引用、用测试和外部资料交叉验证，是三类有效手段。对 AI 记忆保持怀疑，尤其是版本号、API 用法、配置项这类细节。'
  },
  {
    id: 'pr-09',
    level: '低',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'judge',
    question: 'Prompt 写得越长，AI 的输出效果一定越好。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '长度不等于质量。冗长、重复、矛盾的 prompt 反而会干扰模型。好的 prompt 是结构清晰、信息相关、约束明确，而不是字数多。'
  },
  {
    id: 'pr-10',
    level: '中',
    difficulty: '进阶',
    category: 'Prompt 与代码审查',
    type: 'single',
    question: '审查 AI 生成的 SQL 时，最应该优先关注什么？',
    options: [
      '关键字大小写是否统一',
      'SQL 注入、索引是否命中、事务边界',
      '注释是否足够多',
      '换行和缩进是否漂亮'
    ],
    answer: [1],
    explanation: 'SQL 审查优先看三件事：有没有拼接用户输入导致注入、查询能不能走索引、事务范围是否合理。格式问题可以交给格式化工具，不是重点。'
  },

  /* ==================== 三、Kubernetes / Helm ==================== */
  {
    id: 'k8s-01',
    level: '高',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Kubernetes 中最小的调度单元是什么？',
    options: ['Pod', 'Deployment', 'Service', 'Node'],
    answer: [0],
    explanation: 'Pod 是 K8s 调度的最小单位，里面可以有一个或多个容器，共享网络和存储。Deployment 管理 Pod，Service 给 Pod 提供访问入口，Node 是运行 Pod 的机器。'
  },
  {
    id: 'k8s-02',
    level: '中',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'multiple',
    question: '以下哪些属于 Kubernetes 控制面（Master）组件？',
    options: ['API Server', 'etcd', 'Scheduler', 'Controller Manager'],
    answer: [0, 1, 2, 3],
    explanation: '控制面四个核心组件：API Server 是唯一入口，etcd 存集群状态，Scheduler 决定 Pod 调度到哪个节点，Controller Manager 负责副本、节点等控制器。kubelet 和 kube-proxy 属于工作节点组件。'
  },
  {
    id: 'k8s-03',
    level: '高',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '部署有状态应用（如数据库）时，更适合使用哪种资源对象？',
    options: ['Deployment', 'StatefulSet', 'DaemonSet', 'CronJob'],
    answer: [1],
    explanation: 'StatefulSet 给每个 Pod 固定的名字、稳定的网络标识和独立的存储，适合数据库、中间件这类有状态应用。Deployment 适合无状态应用，DaemonSet 是每个节点跑一个，CronJob 是定时任务。'
  },
  {
    id: 'k8s-04',
    level: '高',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '给一组 Pod 提供固定访问地址和负载均衡的是哪个对象？',
    options: ['ConfigMap', 'Secret', 'Service', 'Ingress'],
    answer: [2],
    explanation: 'Service 为一组 Pod 提供稳定的虚拟 IP 和负载均衡，Pod 重建 IP 变化也不影响访问。Ingress 是七层路由，把域名/路径转发到 Service；ConfigMap 和 Secret 用来存配置。'
  },
  {
    id: 'k8s-05',
    level: '高',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '按域名或路径把 HTTP 请求转发到不同 Service 的是？',
    options: ['Ingress', 'Deployment', 'PV', 'Namespace'],
    answer: [0],
    explanation: 'Ingress 是七层（HTTP/HTTPS）入口，按域名、路径等规则把流量转发到不同 Service，通常需要配合 Ingress Controller 使用。'
  },
  {
    id: 'k8s-06',
    level: '高',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'livenessProbe（存活探针）失败时，Kubernetes 会怎么做？',
    options: [
      '重启容器',
      '把 Pod 从 Service 摘掉',
      '删除整个 Deployment',
      '什么也不做'
    ],
    answer: [0],
    explanation: 'livenessProbe 失败会重启容器，用于"进程还在但已经卡死"的场景。readinessProbe 失败才是从 Service 摘流量；startupProbe 用于启动慢的应用，启动成功前不执行另外两个探针。'
  },
  {
    id: 'k8s-07',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Pod 一直处于 CrashLoopBackOff，第一步最应该做什么？',
    options: [
      '直接删除整个集群',
      'kubectl describe pod 看 Events，并用 logs --previous 看崩溃前日志',
      '马上扩容到 100 个副本',
      '重启所有节点'
    ],
    answer: [1],
    explanation: '先看事件和崩溃日志：describe 能看到镜像拉取、探针失败、调度失败、资源不足等原因，logs --previous 能看上一个容器实例崩溃前的输出。定位原因后再改配置或回滚。'
  },
  {
    id: 'k8s-08',
    level: '高',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Pod 状态显示 OOMKilled，最可能的原因是什么？',
    options: [
      '镜像地址写错',
      '没有配置 Service',
      '容器内存使用超过了 limits 限制',
      '节点磁盘满了'
    ],
    answer: [2],
    explanation: 'OOMKilled 表示容器内存超过 limits，被系统杀掉。先看 kubectl top pod 确认内存，再判断是 limit 设得太小，还是应用有内存泄漏。临时可以调大 limit，根本要查代码。'
  },
  {
    id: 'k8s-09',
    level: '低',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Pod 出现 ImagePullBackOff，常见原因不包括哪一项？',
    options: [
      '镜像地址写错',
      '私有仓库没有配置拉取密钥',
      '离线环境没有提前导入镜像',
      'Pod 的 CPU limit 设置太小'
    ],
    answer: [3],
    explanation: 'ImagePullBackOff 是镜像拉取失败，常见于镜像名错、仓库权限不足、网络不通、离线环境没导入镜像。CPU limit 太小导致的是 OOMKilled 或运行慢，不会导致镜像拉取失败。'
  },
  {
    id: 'k8s-10',
    level: '中',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Pod 一直处于 Pending 状态，可能的原因不包括？',
    options: [
      '节点资源不足',
      '亲和性/反亲和性规则不满足',
      'PVC 没有绑定成功',
      '容器日志太多'
    ],
    answer: [3],
    explanation: 'Pending 表示 Pod 还没被调度或还没准备好运行，常见原因是节点 CPU/内存不足、亲和性不满足、污点不容忍、PVC 未绑定。日志太多属于运行期问题，不会导致 Pending。'
  },
  {
    id: 'k8s-11',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Service 访问不通，第一步最有效的检查是？',
    options: [
      '重装 Kubernetes',
      'kubectl get endpoints 看 Service 后面有没有健康的 Pod',
      '把所有副本删掉',
      '修改数据库密码'
    ],
    answer: [1],
    explanation: '先确认 Service 有没有后端 Endpoints。如果 endpoints 为空，通常是 selector 和 Pod 标签不匹配，或 Pod 没就绪；如果有 endpoints，再查端口、NetworkPolicy、DNS 和 Pod 内网络。'
  },
  {
    id: 'k8s-12',
    level: '高',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'PV 和 PVC 的关系，正确描述是？',
    options: [
      'PV 是应用申请，PVC 是管理员提供的存储',
      '两者是同一个东西',
      'PV 是存储资源，PVC 是应用对存储的申请，两者绑定后使用',
      'PVC 只能用于数据库'
    ],
    answer: [2],
    explanation: 'PV（PersistentVolume）是集群里的一块存储资源，PVC（PersistentVolumeClaim）是应用"我要一块多大、什么类型的存储"的申请。K8s 把 PVC 和满足条件的 PV 绑定，Pod 再挂载 PVC。'
  },
  {
    id: 'k8s-13',
    level: '中',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'HPA（Horizontal Pod Autoscaler）的作用是什么？',
    options: [
      '按 CPU、内存或自定义指标自动增减 Pod 数量',
      '自动扩容节点磁盘',
      '自动修改数据库表结构',
      '自动生成 Helm Chart'
    ],
    answer: [0],
    explanation: 'HPA 是水平自动扩缩容，根据指标（如 CPU 使用率、QPS）自动增加或减少 Pod 副本数。它不负责节点扩缩容，节点层面通常用 Cluster Autoscaler。'
  },
  {
    id: 'k8s-14',
    level: '低',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '滚动更新中的 maxUnavailable 参数表示什么？',
    options: [
      '最多允许创建多少个新 Pod',
      '升级过程中最多允许多少个 Pod 不可用',
      '镜像最大体积',
      '最大副本数'
    ],
    answer: [1],
    explanation: 'maxUnavailable 控制升级时最多允许多少个 Pod 不可用，maxSurge 控制最多允许多出多少个 Pod。两者配合保证滚动更新期间服务始终有足够副本可用。'
  },
  {
    id: 'k8s-15',
    level: '高',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'multiple',
    question: '一个标准的 Helm Chart 通常包含哪些内容？',
    options: ['Chart.yaml', 'values.yaml', 'templates 目录', 'charts 目录（依赖子 Chart）'],
    answer: [0, 1, 2, 3],
    explanation: 'Chart.yaml 描述 Chart 的元信息，values.yaml 是默认配置，templates 里是 Kubernetes 资源模板，charts 放依赖的子 Chart。打包后是一个 .tgz 文件，可离线分发。'
  },
  {
    id: 'k8s-16',
    level: '高',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '使用 Helm 回滚到上一个版本，应该用哪个命令？',
    options: ['helm upgrade', 'helm uninstall', 'helm rollback', 'helm lint'],
    answer: [2],
    explanation: 'helm rollback 把 Release 回滚到指定版本，不指定版本时默认回滚到上一个版本。helm history 可以查看版本历史，helm upgrade 是升级，helm uninstall 是卸载。'
  },
  {
    id: 'k8s-17',
    level: '中',
    difficulty: '基础',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'ConfigMap 和 Secret 的主要区别是？',
    options: [
      'ConfigMap 只能存数字',
      'Secret 用来存密码、token 等敏感信息，并做了额外保护',
      'Secret 不能挂载到 Pod',
      '两者完全一样'
    ],
    answer: [1],
    explanation: '两者都是把配置从镜像里解耦出来。ConfigMap 存普通配置，Secret 存密码、密钥、token 等敏感信息，默认以 Base64 编码存储，并可以配合 RBAC、加密存储等机制加强保护。注意 Base64 不是加密。'
  },
  {
    id: 'k8s-18',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Kubernetes 中 requests 和 limits 的区别，正确说法是？',
    options: [
      'requests 是上限，limits 是保证',
      '两者必须相等',
      'requests 只影响日志，limits 只影响网络',
      'requests 是调度时保证的最小资源，limits 是运行时允许的最大资源'
    ],
    answer: [3],
    explanation: 'requests 决定调度：节点必须有这么多可分配资源才会把 Pod 放上去；limits 是运行时上限，超过 CPU limit 会被限流，超过内存 limit 会被 OOMKilled。'
  },
  {
    id: 'k8s-19',
    level: '中',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'multiple',
    question: '排查 Linux 服务器问题时，常用的命令包括？',
    options: ['top / htop', 'ss -lntp', 'df -h / du -sh', 'journalctl / tail -f'],
    answer: [0, 1, 2, 3],
    explanation: 'top 看进程和 CPU 内存，ss 看端口监听，df/du 看磁盘，journalctl 和 tail 看日志。排障还要会用 ps、free、curl、ping、traceroute、dmesg 等。'
  },
  {
    id: 'k8s-20',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '客户环境没有外网，镜像应该怎么交付？',
    options: [
      '让客户自己上网拉取',
      '把镜像 docker save 成 tar 包带进去 docker load，或通过离线 Harbor 同步',
      '把 Dockerfile 发给客户让他自己构建',
      '直接复制容器里的文件'
    ],
    answer: [1],
    explanation: '离线交付的标准做法是：在有网环境 docker pull/save 导出镜像 tar，带到客户环境 docker load；或者搭建离线 Harbor，批量同步镜像。再把 Helm Chart、安装脚本和文档一起交付。'
  },

  /* ==================== 四、DevOps / CI-CD ==================== */
  {
    id: 'dev-01',
    level: '高',
    difficulty: '基础',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: '一条典型的 CI/CD 流水线，正确的顺序是？',
    options: [
      '部署 → 构建 → 测试 → 提交',
      '提交 → 构建 → 测试 → 打包镜像 → 推送仓库 → 部署 → 验证',
      '测试 → 提交 → 部署 → 构建',
      '推送镜像 → 写代码 → 部署'
    ],
    answer: [1],
    explanation: '标准流程：代码提交触发流水线 → 编译构建 → 跑测试和静态检查 → 打镜像 → 推镜像仓库 → 部署到环境 → 健康检查和冒烟测试。任何一步失败都应该阻断后续步骤。'
  },
  {
    id: 'dev-02',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'multiple',
    question: '流水线中可以设置哪些质量门禁？',
    options: ['单元测试', '静态代码扫描', '镜像漏洞扫描', '部署后冒烟测试'],
    answer: [0, 1, 2, 3],
    explanation: '质量门禁的作用是"不达标就不让过"。单元测试保证逻辑，静态扫描查代码规范和安全问题，镜像扫描查依赖漏洞，冒烟测试确认部署后核心功能可用。'
  },
  {
    id: 'dev-03',
    level: '高',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: 'Kubernetes 中发布失败，最常用的回滚方式是哪一组？',
    options: [
      '删除整个命名空间',
      '重新编译代码',
      'helm rollback 或 kubectl rollout undo',
      '重启所有节点'
    ],
    answer: [2],
    explanation: '用 Helm 部署的用 helm rollback 回退版本；直接管理 Deployment 的用 kubectl rollout undo 回退到上一个 ReplicaSet。回滚后要确认 Pod 就绪、接口健康。'
  },
  {
    id: 'dev-04',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: 'GitOps（如 Argo CD）的核心思想是什么？',
    options: [
      '所有操作都在服务器上手工执行',
      'Git 仓库是系统期望状态的唯一事实来源，工具持续把集群同步到 Git 描述的状态',
      '只使用 Jenkins',
      '禁止使用 Kubernetes'
    ],
    answer: [1],
    explanation: 'GitOps 把部署清单也放进 Git，Argo CD 持续比对 Git 里的期望状态和集群实际状态，不一致就同步。好处是变更可审计、回滚就是 revert、环境状态可复现。'
  },
  {
    id: 'dev-05',
    level: '中',
    difficulty: '高难',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: '关于 git merge 和 git rebase，说法正确的是？',
    options: [
      'rebase 会把当前分支的提交"搬"到目标分支最新提交之后，历史更线性',
      'merge 会删除历史提交',
      'rebase 可以随意修改已经推送到公共分支的历史',
      '两者完全一样'
    ],
    answer: [0],
    explanation: 'rebase 变基让提交历史更线性、更清晰，但会改写提交哈希，所以不要对已经推送到公共分支的历史做 rebase。merge 会生成合并提交，保留分支历史。'
  },
  {
    id: 'dev-06',
    level: '中',
    difficulty: '高难',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: 'Shell 脚本开头写 set -euo pipefail，主要作用是什么？',
    options: [
      '让脚本运行更快',
      '自动安装依赖',
      '命令出错立即退出、使用未定义变量报错、管道中任一命令失败也能被发现',
      '自动生成日志'
    ],
    answer: [2],
    explanation: '-e 命令失败立即退出，-u 使用未定义变量报错，-o pipefail 让管道中任一环节失败都返回失败。这三项能避免脚本"出错了还继续跑"，是健壮脚本的基本配置。'
  },
  {
    id: 'dev-07',
    level: '高',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'multiple',
    question: '多环境（开发/测试/生产）配置管理，合理的做法包括？',
    options: [
      '用不同的 values 文件区分环境',
      '敏感信息放 Secret 或密钥管理服务',
      '用命名空间做环境隔离',
      '把生产密码直接写进代码仓库'
    ],
    answer: [0, 1, 2],
    explanation: '多环境管理的原则是"配置和代码分离、敏感信息和普通配置分离、环境之间隔离"。生产密码绝不能明文进仓库，应该用 Secret、Vault 或云厂商密钥服务。'
  },
  {
    id: 'dev-08',
    level: '高',
    difficulty: '基础',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: '构建镜像时，tag 的最佳实践是？',
    options: [
      '永远用 latest',
      '用版本号或 Git commit hash，保证可追溯、可回滚',
      '用当前时间戳的秒数',
      '不写 tag'
    ],
    answer: [1],
    explanation: 'latest 会漂移，今天部署的和明天部署的可能不是同一个镜像，无法追溯和回滚。应该用语义化版本号或 commit hash，并保留历史版本。'
  },
  {
    id: 'dev-09',
    level: '高',
    difficulty: '高难',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: '金丝雀发布（Canary Release）的核心做法是？',
    options: [
      '一次性替换所有实例',
      '先停掉所有服务再发布',
      '先把新版本发布给小部分流量，观察指标正常后再逐步扩大',
      '只在一台开发机上测试'
    ],
    answer: [2],
    explanation: '金丝雀发布用小流量验证新版本，观察错误率、延迟等指标，正常再逐步放量，异常立即回滚。相比一次性全量替换，风险低很多。'
  },
  {
    id: 'dev-10',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'judge',
    question: 'CI 流水线全部通过，就可以直接发布到生产环境。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'CI 通过只说明构建、测试等环节没问题，不代表生产环境一定安全。还需要考虑配置差异、数据库变更、依赖服务、灰度策略、回滚方案和发布窗口。生产发布通常需要审批和分批。'
  },
  {
    id: 'dev-11',
    level: '低',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: 'Jenkins 声明式 Pipeline 的基本结构是？',
    options: [
      'pipeline { stages { stage("build") { steps { ... } } } }',
      'def main() { build() }',
      'docker run build',
      'kubectl apply -f pipeline.yaml'
    ],
    answer: [0],
    explanation: '声明式 Pipeline 用 pipeline 块包住 agent、stages、post 等，每个 stage 里写 steps。它是 Jenkinsfile 的推荐写法，结构清晰、易维护。'
  },
  {
    id: 'dev-12',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'multiple',
    question: '生产发布前，通常需要确认哪些事项？',
    options: [
      '测试通过、镜像已扫描',
      '有回滚方案和备份',
      '变更内容和影响范围已通知',
      '发布窗口和值班人员已确认'
    ],
    answer: [0, 1, 2, 3],
    explanation: '发布前的检查清单至少包括：测试和扫描通过、回滚方案、数据备份、变更通知、发布窗口、值班安排。交付/私有化项目还要确认客户侧环境和时间。'
  },

  /* ==================== 五、前端 Vue / TS ==================== */
  {
    id: 'fe-01',
    level: '高',
    difficulty: '基础',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'Vue 2 和 Vue 3 的响应式原理，分别是什么？',
    options: [
      'Vue 2 用 Proxy，Vue 3 用 Object.defineProperty',
      'Vue 2 用 Object.defineProperty，Vue 3 用 Proxy',
      '两者都用 Proxy',
      '两者都用 Object.defineProperty'
    ],
    answer: [1],
    explanation: 'Vue 2 用 Object.defineProperty 劫持属性的 getter/setter，无法监听新增属性、删除属性和数组下标修改；Vue 3 用 Proxy 代理整个对象，能完整拦截这些操作。'
  },
  {
    id: 'fe-02',
    level: '高',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'Vue 3 中 ref 和 reactive 的区别，说法正确的是？',
    options: [
      'ref 适合基本类型，reactive 适合对象/数组',
      'ref 只能存字符串',
      'reactive 只能存数字',
      '两者完全一样'
    ],
    answer: [0],
    explanation: 'ref 可以包装基本类型和对象，通过 .value 访问，模板里自动解包；reactive 用于对象和数组，返回 Proxy。简单值用 ref，复杂对象用 reactive 都可以，团队内保持统一即可。'
  },
  {
    id: 'fe-03',
    level: '高',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'computed 和 watch 的主要区别是？',
    options: [
      'computed 用于监听路由，watch 用于计算',
      'computed 有缓存，适合派生数据；watch 用于监听变化后执行副作用',
      '两者完全一样',
      'computed 不能返回值'
    ],
    answer: [1],
    explanation: 'computed 依赖不变就不会重新计算，适合从已有数据推导新值（过滤列表、总价）；watch 在数据变化后执行异步请求、弹窗、埋点等副作用。能用 computed 就优先用 computed。'
  },
  {
    id: 'fe-04',
    level: '低',
    difficulty: '基础',
    category: '前端 Vue / TS',
    type: 'multiple',
    question: '以下哪些是 TypeScript 的基础类型？',
    options: ['string', 'number', 'boolean', 'unknown'],
    answer: [0, 1, 2, 3],
    explanation: 'string、number、boolean 是基础类型；unknown 表示"暂时不知道类型"，比 any 安全，使用前必须先做类型收窄。此外还有 any、void、never、null、undefined 等。'
  },
  {
    id: 'fe-05',
    level: '低',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'TypeScript 中 interface 和 type 的区别，说法正确的是？',
    options: [
      'interface 只能定义函数',
      'type 不能定义对象',
      'interface 可以声明合并，适合描述对象结构；type 支持联合、交叉等更灵活的类型组合',
      '两者完全等价，没有任何区别'
    ],
    answer: [2],
    explanation: 'interface 适合定义对象结构，支持同名声明合并，扩展时更友好；type 可以定义联合类型、交叉类型、映射类型等，表达力更强。实际项目中两者经常混用。'
  },
  {
    id: 'fe-06',
    level: '低',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'TypeScript 泛型的主要作用是什么？',
    options: [
      '让代码运行更快',
      '把类型参数化，在复用的同时保持类型安全',
      '自动生成单元测试',
      '替代 JavaScript'
    ],
    answer: [1],
    explanation: '泛型让你写"对类型不敏感但保持类型关系"的代码，比如 ApiResponse<T>、Array<T>。调用时再指定具体类型，既复用又能在编译期发现类型错误。'
  },
  {
    id: 'fe-07',
    level: '高',
    difficulty: '基础',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'v-for 渲染列表时，key 应该用什么？',
    options: [
      '唯一且稳定的 id，不要用 index',
      '数组下标 index',
      '随机数',
      '不写 key'
    ],
    answer: [0],
    explanation: 'key 帮助 diff 算法判断节点能否复用。用 index 时，列表增删排序会导致节点复用错位、组件状态错乱（比如输入框内容串位）。应该用数据的唯一 id。'
  },
  {
    id: 'fe-08',
    level: '高',
    difficulty: '基础',
    category: '前端 Vue / TS',
    type: 'single',
    question: '$nextTick 的作用是什么？',
    options: [
      '让接口请求更快',
      '在 DOM 更新完成后执行回调',
      '强制刷新浏览器',
      '清除所有定时器'
    ],
    answer: [1],
    explanation: 'Vue 的 DOM 更新是异步的，改完数据立刻拿 DOM 还是旧值。$nextTick 会在 DOM 更新后执行回调，常用于弹窗打开后获取尺寸、地图容器渲染后初始化、列表更新后滚动到底部。'
  },
  {
    id: 'fe-09',
    level: '中',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'keep-alive 的主要作用是什么？',
    options: [
      '缓存组件实例，切走时不销毁，返回时保留状态',
      '让接口保持长连接',
      '自动压缩图片',
      '替代 Vuex'
    ],
    answer: [0],
    explanation: 'keep-alive 缓存组件实例，适合列表页 → 详情页 → 返回列表的场景，避免重复加载和状态丢失。被缓存的组件多出 activated/deactivated 生命周期，注意在 deactivated 里暂停定时器和监听。'
  },
  {
    id: 'fe-10',
    level: '中',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'vue-router 的 hash 模式和 history 模式，说法正确的是？',
    options: [
      'hash 模式不需要服务端额外配置，刷新不会 404；history 模式需要服务端 fallback',
      'history 模式不需要服务端配置',
      'hash 模式 URL 更好看',
      '两者没有区别'
    ],
    answer: [0],
    explanation: 'hash 模式靠 # 后面的内容切换，不会发给服务器，部署简单；history 模式用 pushState，URL 好看，但刷新或直接访问需要服务端把所有路径回退到 index.html，否则 404。WebView 里通常用 hash 更稳。'
  },
  {
    id: 'fe-11',
    level: '高',
    difficulty: '高难',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'Vue 2 中直接修改数组下标（如 arr[0] = x）视图不更新，正确的解决方式是？',
    options: [
      '刷新浏览器',
      '用 Vue.set(arr, 0, x) 或整体替换数组',
      '改用 v-if',
      '删除数组重新创建'
    ],
    answer: [1],
    explanation: 'Vue 2 用 Object.defineProperty 无法拦截数组下标赋值。用 Vue.set/$set 可以触发更新，或者用 splice、整体替换数组。数组的 push/pop/shift/unshift/splice/sort/reverse 已被 Vue 重写，可以正常响应。'
  },
  {
    id: 'fe-12',
    level: '低',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'React 中 useEffect 的依赖数组，正确理解是？',
    options: [
      '依赖数组里的值变化时，effect 才会重新执行',
      '依赖数组必须为空',
      '依赖数组只影响样式',
      '不写依赖数组和写空数组效果完全一样'
    ],
    answer: [0],
    explanation: 'useEffect 在依赖变化后重新执行；空数组表示只在挂载时执行一次，卸载时执行清理函数；不写依赖数组则每次渲染后都执行。依赖写全可以避免闭包拿到旧值。'
  },

  /* ==================== 六、Node.js / Python ==================== */
  {
    id: 'node-01',
    level: '高',
    difficulty: '基础',
    category: 'Node.js / Python',
    type: 'single',
    question: 'Node.js 为什么适合处理高并发 IO？',
    options: [
      '因为它给每个请求创建一个操作系统线程',
      '因为它是单线程 + 非阻塞 IO + 事件循环，避免线程切换开销',
      '因为它不使用内存',
      '因为它只能处理静态文件'
    ],
    answer: [1],
    explanation: 'Node 主线程是单线程，但 IO 操作交给底层线程池或操作系统异步处理，通过事件循环回调。这样少量线程就能支撑大量并发连接，适合 IO 密集型场景；CPU 密集型任务会阻塞主线程，需要用 worker_threads 或拆服务。'
  },
  {
    id: 'node-02',
    level: '高',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: 'Express 中间件的执行顺序是？',
    options: [
      '按注册顺序执行，调用 next() 才会继续往下走',
      '随机执行',
      '按字母顺序执行',
      '只执行最后一个'
    ],
    answer: [0],
    explanation: '中间件按 app.use 的注册顺序形成一条链，每个中间件处理完后调用 next() 进入下一个；不调用 next() 就中断，调用 next(err) 进入错误处理中间件。鉴权、日志、参数校验都常用中间件实现。'
  },
  {
    id: 'node-03',
    level: '高',
    difficulty: '基础',
    category: 'Node.js / Python',
    type: 'single',
    question: 'JWT 鉴权的基本流程是？',
    options: [
      '每次请求都传用户名密码',
      '登录成功后服务端签发 token，客户端在请求头携带，服务端校验签名和有效期',
      '把密码存在前端 localStorage 里',
      '不需要任何凭证'
    ],
    answer: [1],
    explanation: '登录成功后服务端用密钥签发 JWT，客户端存起来并在后续请求的 Authorization 头里携带，服务端校验签名、过期时间和权限。JWT 是无状态的，适合分布式；但要处理好过期刷新和注销。'
  },
  {
    id: 'node-04',
    level: '中',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: '数据库连接池的主要作用是什么？',
    options: [
      '让 SQL 自动走索引',
      '复用数据库连接，避免频繁建立和关闭连接的开销',
      '自动备份数据库',
      '替代 Redis'
    ],
    answer: [1],
    explanation: '建立数据库连接成本较高，连接池预先维护一批连接，用完归还而不是关闭。要注意池大小、超时和泄漏检测，连接不归还会导致池耗尽。'
  },
  {
    id: 'node-05',
    level: '中',
    difficulty: '高难',
    category: 'Node.js / Python',
    type: 'single',
    question: '服务的"优雅退出"指的是什么？',
    options: [
      '直接 kill -9 进程',
      '停止接收新请求，处理完在途请求、关闭连接和资源后再退出',
      '退出前删除所有日志',
      '重启服务器'
    ],
    answer: [1],
    explanation: '优雅退出要监听 SIGTERM，停止接收新请求，等待在途请求完成，关闭数据库/Redis/MQ 连接，再退出进程。K8s 滚动更新时会先发 SIGTERM，配合 preStop 和优雅退出能避免请求被中断。'
  },
  {
    id: 'node-06',
    level: '中',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'multiple',
    question: 'Node.js 后端常见的安全风险包括？',
    options: [
      'SQL/NoSQL 注入',
      'XSS 和模板注入',
      '命令注入（把用户输入拼进 shell）',
      '依赖包漏洞'
    ],
    answer: [0, 1, 2, 3],
    explanation: 'Node 生态里这四类都常见：参数化查询防注入、输出转义防 XSS、避免把用户输入拼进 exec/spawn、定期 npm audit 和升级依赖。此外还要注意 JWT 密钥管理和越权。'
  },
  {
    id: 'node-07',
    level: '低',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: 'Python 虚拟环境（venv）的主要作用是什么？',
    options: [
      '隔离项目的依赖，避免不同项目版本冲突',
      '让 Python 运行更快',
      '自动生成代码',
      '替代 Docker'
    ],
    answer: [0],
    explanation: 'venv 给每个项目创建独立的 Python 解释器和依赖目录，项目之间的包版本互不影响。部署时通常再配合 requirements.txt 或容器镜像保证环境一致。'
  },
  {
    id: 'node-08',
    level: '低',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: 'FastAPI 的主要特点不包括哪一项？',
    options: [
      '基于类型提示做参数校验',
      '自动生成 OpenAPI 文档',
      '原生支持异步',
      '只能运行在 Windows 上'
    ],
    answer: [3],
    explanation: 'FastAPI 基于 Python 类型提示做校验，自动生成 Swagger/OpenAPI 文档，原生支持 async，跨平台运行。它适合快速构建 API 和 AI 相关服务。'
  },
  {
    id: 'node-09',
    level: '高',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: '针对这个岗位，选择 Node.js 作为后端补充语言，最合理的理由是？',
    options: [
      'Node.js 比 Java 更高级',
      'Node.js 只能写前端',
      '与已有的 JavaScript/Vue 基础一致，上手快，适合工具链和 IO 密集型服务',
      'Node.js 不需要数据库'
    ],
    answer: [2],
    explanation: '你已有 Vue/JavaScript 生产经验，转 Node 的语法和生态成本最低。这个岗位大量是工具链、接口层和自动化，Node 很合适。面试时要诚实说明"主力是 Java，Node 能独立交付"，并用项目证明。'
  },
  {
    id: 'node-10',
    level: '中',
    difficulty: '高难',
    category: 'Node.js / Python',
    type: 'judge',
    question: 'Node.js 是单线程的，所以完全无法利用多核 CPU。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'Node 主线程是单线程，但可以用 cluster 启动多个进程，或用 worker_threads 开工作线程，把 CPU 密集任务分摊到多核。生产环境常用 PM2 cluster 或 K8s 多副本。'
  },

  /* ==================== 七、监控与日志 ==================== */
  {
    id: 'mon-01',
    level: '高',
    difficulty: '基础',
    category: '监控与日志',
    type: 'single',
    question: 'Prometheus 采集指标的主要模型是什么？',
    options: [
      '拉取（pull）：定期访问目标的 /metrics 接口',
      '推送（push）：只能由应用主动推',
      '只读数据库',
      '只采集日志'
    ],
    answer: [0],
    explanation: 'Prometheus 默认是 pull 模型，按配置定期抓取目标暴露的 /metrics。短生命周期任务可以用 Pushgateway 中转。采集到的数据存时序库，用 PromQL 查询。'
  },
  {
    id: 'mon-02',
    level: '低',
    difficulty: '进阶',
    category: '监控与日志',
    type: 'multiple',
    question: 'Prometheus 的四种指标类型包括？',
    options: ['Counter（计数器）', 'Gauge（仪表盘）', 'Histogram（直方图）', 'Summary（摘要）'],
    answer: [0, 1, 2, 3],
    explanation: 'Counter 只增不减，适合请求总数；Gauge 可增可减，适合内存、连接数；Histogram 按桶统计分布，适合延迟；Summary 统计分位数。选对类型，PromQL 才算得对。'
  },
  {
    id: 'mon-03',
    level: '低',
    difficulty: '进阶',
    category: '监控与日志',
    type: 'single',
    question: 'PromQL 中 rate() 函数的作用是？',
    options: [
      '计算总数',
      '计算计数器在时间窗口内的每秒平均增长率',
      '修改指标值',
      '删除指标'
    ],
    answer: [1],
    explanation: 'rate() 用于 Counter 类型，计算一段时间内的每秒增长速率，常用来算 QPS。注意窗口要足够大，且至少包含两个采样点。'
  },
  {
    id: 'mon-04',
    level: '中',
    difficulty: '高难',
    category: '监控与日志',
    type: 'single',
    question: '避免"告警风暴"（一次故障触发成百上千条告警），最有效的组合是？',
    options: [
      '关闭所有告警',
      '只发邮件',
      '告警分组、抑制、静默，并设置合理阈值和持续时间',
      '把阈值调到 0'
    ],
    answer: [2],
    explanation: 'Alertmanager 支持按标签分组、抑制（上游故障时抑制下游重复告警）、静默（维护期屏蔽）。阈值要结合业务设置，并加 for 持续时间，避免瞬时抖动触发。'
  },
  {
    id: 'mon-05',
    level: '高',
    difficulty: '基础',
    category: '监控与日志',
    type: 'single',
    question: 'ELK 三件套通常指哪三个组件？',
    options: [
      'Elasticsearch、Logstash、Kibana',
      'Eureka、Logback、Kafka',
      'Envoy、Linkerd、Kiali',
      'Etcd、Linux、Kubernetes'
    ],
    answer: [0],
    explanation: 'Elasticsearch 存和搜日志，Logstash 采集和清洗，Kibana 查询和可视化。K8s 场景常用 Filebeat 或 Fluent Bit 代替 Logstash 采集，形成 EFK。'
  },
  {
    id: 'mon-06',
    level: '高',
    difficulty: '进阶',
    category: '监控与日志',
    type: 'single',
    question: 'traceId 在分布式系统里的主要作用是？',
    options: [
      '给数据库主键用',
      '串联一次请求经过的所有服务和日志，方便排查',
      '加密日志',
      '压缩日志体积'
    ],
    answer: [1],
    explanation: '一次请求进入系统时生成唯一 traceId，通过 HTTP Header 或 MQ 传递到下游，每个服务打印日志时带上它。排查时按 traceId 就能把整条调用链的日志捞出来。'
  },
  {
    id: 'mon-07',
    level: '低',
    difficulty: '基础',
    category: '监控与日志',
    type: 'single',
    question: '日志级别从高到低的正确顺序是？',
    options: [
      'DEBUG > INFO > WARN > ERROR',
      'INFO > ERROR > WARN > DEBUG',
      'WARN > ERROR > INFO > DEBUG',
      'ERROR > WARN > INFO > DEBUG'
    ],
    answer: [3],
    explanation: '常见顺序是 ERROR > WARN > INFO > DEBUG（有的还有 TRACE/FATAL）。生产环境一般开 INFO，排查问题时临时调 DEBUG，避免日志量过大影响性能和存储。'
  },
  {
    id: 'mon-08',
    level: '低',
    difficulty: '高难',
    category: '监控与日志',
    type: 'single',
    question: 'Elasticsearch 的 ILM（索引生命周期管理）主要解决什么问题？',
    options: [
      '自动生成索引名',
      '自动写入数据',
      '按热/温/冷分层管理索引，滚动创建和过期删除，控制存储成本',
      '替代 Kibana'
    ],
    answer: [2],
    explanation: 'ILM 按策略管理索引生命周期：热数据保留在高性能节点，冷数据迁移或压缩，超过保留期自动删除。日志场景通常按天滚动索引，配合 ILM 防止磁盘被撑爆。'
  },

  /* ==================== 八、私有化交付 ==================== */
  {
    id: 'priv-01',
    level: '高',
    difficulty: '基础',
    category: '私有化交付',
    type: 'single',
    question: '离线环境交付镜像，最标准的做法是？',
    options: [
      '让客户自己联网拉取',
      '在有网环境 docker save 导出 tar，在客户环境 docker load 导入',
      '把源码复制过去现场编译',
      '只交付 Dockerfile'
    ],
    answer: [1],
    explanation: 'docker save 把镜像（含所有层）导出成 tar，拷贝到离线环境后 docker load 导入。规模大时用离线 Harbor 批量同步，并保留镜像 tag 和版本对应关系。'
  },
  {
    id: 'priv-02',
    level: '高',
    difficulty: '进阶',
    category: '私有化交付',
    type: 'single',
    question: '把 Helm Chart 打包成可离线分发的文件，使用哪个命令？',
    options: ['helm package', 'helm install', 'helm lint', 'helm repo add'],
    answer: [0],
    explanation: 'helm package 把 Chart 目录打包成 .tgz 文件，可以拷贝到客户环境后 helm install ./xxx.tgz 安装。依赖的子 Chart 要提前 helm dependency build。'
  },
  {
    id: 'priv-03',
    level: '高',
    difficulty: '进阶',
    category: '私有化交付',
    type: 'multiple',
    question: '一套完整的私有化交付物通常包括？',
    options: [
      '应用镜像和镜像导入方式',
      'Helm Chart 或部署 YAML',
      '安装、升级、回滚脚本和配置模板',
      '部署手册、升级手册、故障处理手册'
    ],
    answer: [0, 1, 2, 3],
    explanation: '私有化交付不是"把包扔给客户"，而是可重复执行的完整方案：镜像、编排文件、脚本、配置、文档、检查清单，最好还有自动化的健康检查。'
  },
  {
    id: 'priv-04',
    level: '高',
    difficulty: '高难',
    category: '私有化交付',
    type: 'single',
    question: '私有化环境升级失败，最稳妥的恢复方式是？',
    options: [
      '直接重新安装，不管数据',
      '删除所有 Pod',
      '用 helm rollback 回退版本，必要时用升级前备份恢复数据',
      '让客户重启服务器'
    ],
    answer: [2],
    explanation: '升级前要备份数据库和配置，升级失败先 helm rollback 回退应用版本；如果涉及数据变更，用备份恢复。所以升级脚本必须包含备份和回滚步骤。'
  },
  {
    id: 'priv-05',
    level: '高',
    difficulty: '进阶',
    category: '私有化交付',
    type: 'single',
    question: '多环境部署时，隔离配置的合理做法是？',
    options: [
      '所有环境共用一份配置',
      '不同环境用不同 values 文件 + 命名空间隔离 + Secret 管理敏感信息',
      '把生产配置复制到开发环境',
      '每次部署手工改配置文件'
    ],
    answer: [1],
    explanation: '环境隔离要同时做三层：命名空间隔离资源、values 文件区分配置、Secret/密钥服务管理敏感信息。手工改配置容易出错且不可追溯。'
  },
  {
    id: 'priv-06',
    level: '高',
    difficulty: '高难',
    category: '私有化交付',
    type: 'multiple',
    question: '提升系统高可用的常见手段包括？',
    options: ['多副本部署', '负载均衡', '熔断、限流、降级', '数据备份和灾备演练'],
    answer: [0, 1, 2, 3],
    explanation: '高可用是组合拳：多副本消除单点，负载均衡分摊流量，熔断限流防止雪崩，备份和演练保证故障后能恢复。还要做反亲和，避免副本都落在同一节点。'
  },
  {
    id: 'priv-07',
    level: '低',
    difficulty: '基础',
    category: '私有化交付',
    type: 'single',
    question: '系统设计中的"单点"指的是什么？',
    options: [
      '一个组件挂掉会导致整个系统不可用',
      '只有一个开发人员',
      '只有一个数据库表',
      '只有一台显示器'
    ],
    answer: [0],
    explanation: '单点（Single Point of Failure）是系统里没有冗余的关键组件，一旦故障整个链路中断。高可用设计的重要工作就是找出单点并消除（多副本、主从、集群）。'
  },
  {
    id: 'priv-08',
    level: '中',
    difficulty: '进阶',
    category: '私有化交付',
    type: 'single',
    question: '关于数据备份，正确的做法是？',
    options: [
      '只要配置了备份就万事大吉',
      '定期做恢复演练，验证备份真的能恢复',
      '备份放在同一块磁盘上',
      '从不清理旧备份'
    ],
    answer: [1],
    explanation: '备份的价值在于"能恢复"。必须定期做恢复演练，确认备份文件完整、恢复流程可用、恢复时间符合要求。备份还要异地/异盘存放，并制定保留策略。'
  },
  {
    id: 'priv-09',
    level: '中',
    difficulty: '进阶',
    category: '私有化交付',
    type: 'judge',
    question: '私有化部署在客户内网，所以不需要监控和日志。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '私有化环境更需要监控和日志，因为出问题时厂商不一定能远程登录。通常要在客户环境部署 Prometheus/Grafana、日志采集和告警，并把关键指标回传或定期巡检。'
  },
  {
    id: 'priv-10',
    level: '高',
    difficulty: '高难',
    category: '私有化交付',
    type: 'single',
    question: '客户环境完全无外网，应用依赖的第三方包应该怎么处理？',
    options: [
      '运行时再联网下载',
      '提前把所有依赖打进镜像，或搭建内网制品仓库',
      '让客户开放外网',
      '删掉依赖'
    ],
    answer: [1],
    explanation: '无外网环境的依赖必须在交付前准备好：构建阶段就把依赖装进镜像，或搭建内网 npm/pip/maven 仓库和 Harbor。运行时不依赖外网是离线交付的基本要求。'
  },

  /* ==================== 九、系统设计与排障 ==================== */
  {
    id: 'sys-01',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '线上出现紧急故障，第一步应该做什么？',
    options: [
      '先止血：回滚、限流、扩容或降级，保证核心业务可用',
      '先写故障报告',
      '先追责',
      '先重构代码'
    ],
    answer: [0],
    explanation: '故障处理的第一优先级是恢复业务，而不是找根因。先回滚最近变更、限流、扩容或降级止血，然后再定位根因、修复、复盘。顺序反了会让影响持续扩大。'
  },
  {
    id: 'sys-02',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '接口突然变慢，比较合理的排查顺序是？',
    options: [
      '直接重写接口',
      '看监控指标 → 查日志和链路 → 查数据库/中间件/依赖 → 看最近变更',
      '先重启所有服务器',
      '先升级硬件'
    ],
    answer: [1],
    explanation: '先用监控定位是哪个环节慢（应用、DB、Redis、下游），再用日志和 traceId 看具体请求，接着查慢 SQL、连接池、锁、MQ 积压，最后看最近发布和配置变更。'
  },
  {
    id: 'sys-03',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '缓存和数据库保持一致，最常用的更新策略是？',
    options: [
      '先删缓存再更新数据库',
      '只更新缓存不更新数据库',
      '先更新数据库，再删除缓存',
      '缓存和数据库都定时全量同步'
    ],
    answer: [2],
    explanation: 'Cache Aside 策略：写操作先更新数据库，再删除缓存，读操作未命中时从库加载并回写。极端并发下可用延迟双删或订阅 binlog 异步删除，保证最终一致。'
  },
  {
    id: 'sys-04',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '保证消息不丢失，需要覆盖哪三个环节？',
    options: [
      '只保证生产者发送成功',
      '只保证消费者处理成功',
      '只保证 Broker 持久化',
      '生产者确认、Broker 持久化、消费者手动 ack'
    ],
    answer: [3],
    explanation: '三个环节缺一不可：生产者开启 confirm 并处理失败重发；Broker 的交换机、队列、消息都持久化；消费者手动 ack，业务成功才确认。另外消费端要做幂等，防止重复投递。'
  },
  {
    id: 'sys-05',
    level: '中',
    difficulty: '基础',
    category: '系统设计与排障',
    type: 'single',
    question: '以下哪种不是常见的限流算法？',
    options: ['令牌桶', '漏桶', '滑动窗口计数', '二分查找'],
    answer: [3],
    explanation: '常见限流算法有令牌桶（允许一定突发）、漏桶（恒定速率）、固定/滑动窗口计数。二分查找是查找算法，和限流无关。'
  },
  {
    id: 'sys-06',
    level: '中',
    difficulty: '进阶',
    category: '系统设计与排障',
    type: 'single',
    question: '熔断器（Circuit Breaker）的主要作用是？',
    options: [
      '下游持续故障时快速失败，避免请求堆积拖垮整个系统',
      '自动修复下游代码',
      '提高数据库写入速度',
      '加密网络流量'
    ],
    answer: [0],
    explanation: '熔断器在失败率超过阈值时打开，后续请求直接快速失败，不再等待下游；过一段时间进入半开状态试探恢复。它能防止雪崩，常和限流、降级、重试一起使用。'
  },
  {
    id: 'sys-07',
    level: '中',
    difficulty: '进阶',
    category: '系统设计与排障',
    type: 'single',
    question: '做系统容量估算时，通常需要关注哪些数据？',
    options: [
      '只看代码行数',
      'QPS、数据量、存储增长、带宽、连接数、峰值比例',
      '只看服务器数量',
      '只看用户数'
    ],
    answer: [1],
    explanation: '容量估算要综合 QPS（平均和峰值）、单条数据大小和总数据量、存储增长率、带宽、连接数、缓存命中率等。算出瓶颈后再决定扩容、分片或加缓存。'
  },
  {
    id: 'sys-08',
    level: '中',
    difficulty: '基础',
    category: '系统设计与排障',
    type: 'multiple',
    question: '可观测性的三大支柱通常指？',
    options: ['日志（Logs）', '指标（Metrics）', '链路追踪（Traces）', '源代码行数'],
    answer: [0, 1, 2],
    explanation: '日志告诉你"发生了什么"，指标告诉你"系统整体状态"，链路追踪告诉你"一次请求慢在哪"。三者结合才能快速定位问题。'
  },
  {
    id: 'sys-09',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '以下哪种方式不能有效保证接口幂等？',
    options: [
      '业务单号唯一索引',
      '状态机限制状态流转',
      'Token 机制（提交前获取、提交时校验并删除）',
      '每次请求都加随机数但不做任何校验'
    ],
    answer: [3],
    explanation: '幂等的核心是"重复请求只产生一次效果"。唯一索引、状态机、Token、分布式锁、消息去重表都有效；只生成随机数但不校验等于没做。'
  },
  {
    id: 'sys-10',
    level: '高',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '优化一条慢 SQL，正确的第一步是？',
    options: [
      '直接加索引',
      '先看慢查询日志并用 EXPLAIN 分析执行计划',
      '直接改表结构',
      '重启数据库'
    ],
    answer: [1],
    explanation: '先用慢日志确认是哪条 SQL、执行多久，再用 EXPLAIN 看 type、key、rows、Extra，判断是全表扫描、索引失效、回表过多还是排序临时表。定位后再加索引或改写 SQL。'
  },

  /* ==================== 十、岗位与软技能 ==================== */
  {
    id: 'hr-01',
    level: '高',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '这个岗位实际包含哪三条主线？',
    options: [
      '销售、客服、财务',
      '前端、算法、测试',
      '全栈开发、K8s 私有化交付运维、AI First 研发',
      '只做 Kubernetes 运维'
    ],
    answer: [2],
    explanation: 'JD 把三块叠在一起：全栈开发（前后端 + 接口 + 性能）、云原生交付（K8s/Docker/Helm/私有化/排障）、AI First（Claude Code/Cursor、Prompt、代码审查、Agent）。面试要三条线都能接上。'
  },
  {
    id: 'hr-02',
    level: '高',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '岗位对后端语言的硬性要求是？',
    options: [
      '必须会 Java',
      'Go、Python、Node.js 中至少熟练掌握一种',
      '必须会 C++',
      '不需要后端语言'
    ],
    answer: [1],
    explanation: 'JD 明确写"熟练掌握 Go、Python、Node.js 中至少一种"。你主力是 Java，这是最大差距。面试策略是诚实说明 + 用 Node.js 项目证明能独立交付，不要硬编 Go 经验。'
  },
  {
    id: 'hr-03',
    level: '高',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '面试中被问到完全不会的技术，最好的回答方式是？',
    options: [
      '诚实说没在生产中用过，讲自己了解的思路，并说明会怎么快速补',
      '编一个项目经历',
      '沉默不答',
      '反问面试官'
    ],
    answer: [0],
    explanation: '面试官更看重诚实和学习能力。可以说"这块我没在生产环境做过，但我了解它的原理是……，如果入职我会先……补上"。硬编一旦被追问细节就会崩，还会影响诚信评价。'
  },
  {
    id: 'hr-04',
    level: '高',
    difficulty: '基础',
    category: '岗位与软技能',
    type: 'single',
    question: '项目介绍的 STAR 法则分别指？',
    options: [
      '目标、计划、执行、检查',
      '系统、技术、架构、结果',
      '情境、任务、行动、结果',
      '需求、设计、开发、测试'
    ],
    answer: [2],
    explanation: 'STAR = Situation（背景）、Task（任务）、Action（行动）、Result（结果）。讲项目时先说背景和你的职责，再说你采取的技术方案和遇到的难点，最后给可量化的结果。'
  },
  {
    id: 'hr-05',
    level: '高',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '针对这个岗位，最合适的自我定位是？',
    options: [
      '纯 Java 后端工程师',
      'AI First 的全栈交付工程师：后端为主、前后端能落地、能 K8s 部署和排障',
      '只会写前端',
      '纯 Kubernetes 运维'
    ],
    answer: [1],
    explanation: '你的优势是 Java 后端 + Vue 全栈 + K8s 部署 + Claude Code 深度使用。把自己定位成"AI First 的全栈交付工程师"，既贴合 JD，又能把 Java 经历转化为交付能力，而不是硬装成 Go/K8s 专家。'
  },
  {
    id: 'hr-06',
    level: '高',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '被问到离职后的空窗期，最好的回答结构是？',
    options: [
      '编一个考研或创业的理由',
      '说前公司不好',
      '诚实说明离职原因 + 空窗期学了什么/做了什么 + 求职规划',
      '拒绝回答'
    ],
    answer: [2],
    explanation: '空窗期不可怕，可怕的是没有解释。诚实说离职原因，再讲空窗期补了哪些技术、做了什么项目、为什么认真选机会，最后表达随时到岗。'
  },
  {
    id: 'hr-07',
    level: '中',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'single',
    question: '面试最后的反问环节，适合问哪类问题？',
    options: [
      '团队业务、岗位职责、技术栈、成长路径和面试流程',
      '公司加班多不多（直接抱怨式）',
      '能不能远程办公',
      '工资能不能再高一点'
    ],
    answer: [0],
    explanation: '反问是展示兴趣和思考的机会。问团队做什么产品、入职先接手哪块、技术栈和流程、新人怎么带、后续流程。加班、远程、薪资最好留到 HR 环节或侧面了解。'
  },
  {
    id: 'hr-08',
    level: '中',
    difficulty: '进阶',
    category: '岗位与软技能',
    type: 'judge',
    question: '简历可以适当夸大，面试官一般不会追问细节。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: '面试官一定会顺着简历追问细节，尤其是项目、技术栈和数字。夸大一旦被追问就会暴露，还会影响诚信评价。正确做法是真实描述，把普通经历讲出深度和结果。'
  },

  /* ==================== 十一、AI Agent / RAG / MCP ==================== */
  {
    id: 'agent-01',
    level: '高',
    difficulty: '基础',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'RAG（检索增强生成）的标准流程是？',
    options: [
      '直接让模型凭记忆回答，不查任何资料',
      '文档切分 → 向量化 → 检索相关片段 → 拼进 Prompt → 模型生成',
      '只做关键词搜索，不调用模型',
      '把整个互联网重新训练进模型'
    ],
    answer: [1],
    explanation: 'RAG 的核心是"先检索、再生成"：把知识库文档切成片段并向量化存入向量库，用户提问时先检索最相关的片段，拼进 Prompt 让模型基于这些材料回答。这样能引入私有知识，并减少模型凭空编造。'
  },
  {
    id: 'agent-02',
    level: '低',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: '向量数据库在 RAG 中的核心作用是什么？',
    options: [
      '存储关系型数据表',
      '存储文本向量，并支持按相似度快速检索',
      '只存储图片文件',
      '替代 Redis 做缓存'
    ],
    answer: [1],
    explanation: '向量数据库把文本片段转成高维向量存起来，查询时把问题也转成向量，用余弦相似度等方法找最相近的片段。常见的有 Milvus、Qdrant、Weaviate、pgvector 等。'
  },
  {
    id: 'agent-03',
    level: '低',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'RAG 中文档切分（chunk）过大，最直接的问题是什么？',
    options: [
      '检索结果噪声多、浪费上下文窗口',
      '模型完全无法生成回答',
      '向量维度会变少',
      '向量数据库会崩溃'
    ],
    answer: [0],
    explanation: 'chunk 太大会把无关内容一起带进上下文，稀释重点、增加 token 成本和干扰；chunk 太小又会丢失上下文语义。通常按语义段落切分，并设置适量重叠（overlap）。'
  },
  {
    id: 'agent-04',
    level: '中',
    difficulty: '高难',
    category: 'AI Agent / RAG / MCP',
    type: 'multiple',
    question: '提升 RAG 召回率和答案质量，常用哪些手段？',
    options: [
      '合理的文档切分和重叠',
      '混合检索：向量检索 + 关键词检索',
      '检索后做重排（rerank）',
      '对用户问题做改写或扩展'
    ],
    answer: [0, 1, 2, 3],
    explanation: '这四项都很常用：切分决定检索粒度；混合检索兼顾语义和关键词；rerank 用更精细的模型重新排序候选片段；query 改写能解决口语化、指代不清的问题。'
  },
  {
    id: 'agent-05',
    level: '低',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'MCP（Model Context Protocol）是什么？',
    options: [
      '一种关系型数据库',
      '一套标准化协议，让模型/客户端以统一方式连接外部工具和数据源',
      '一种新的编程语言',
      '一种消息队列产品'
    ],
    answer: [1],
    explanation: 'MCP 是模型上下文协议，可以理解为"AI 世界的 USB 接口"：把工具、资源、Prompt 以标准方式暴露给支持 MCP 的客户端，避免每个工具都单独写一套集成。'
  },
  {
    id: 'agent-06',
    level: '中',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'multiple',
    question: '一个 AI Agent 通常包含哪些组成部分？',
    options: [
      '规划与任务分解',
      '工具调用（搜索、数据库、API、代码执行等）',
      '记忆与上下文管理',
      '执行循环与结果反思'
    ],
    answer: [0, 1, 2, 3],
    explanation: 'Agent 的本质是"模型 + 工具 + 循环"：先规划任务，再选择工具执行，观察结果后决定下一步，直到完成或达到终止条件。记忆和上下文管理决定它能否处理长任务。'
  },
  {
    id: 'agent-07',
    level: '高',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'AI Agent 和普通聊天机器人的关键区别是？',
    options: [
      'Agent 能规划多步任务并调用工具执行，聊天机器人主要生成对话回复',
      'Agent 不需要大模型',
      '聊天机器人不能联网',
      '两者完全没有区别'
    ],
    answer: [0],
    explanation: '聊天机器人以"说"为主，Agent 以"做"为主：它能拆解目标、调用工具、根据执行结果调整下一步。当然，Agent 也可能出错，生产环境要加权限控制、人工确认和审计日志。'
  },
  {
    id: 'agent-08',
    level: '中',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'judge',
    question: '接入 RAG 之后，大模型的幻觉就可以被完全消除。',
    options: ['正确', '错误'],
    answer: [1],
    explanation: 'RAG 能显著降低幻觉，但不能完全消除：检索可能没召回到正确内容，片段可能有噪声，模型也可能误读或过度概括。还需要引用来源、置信度提示、人工复核和效果评估。'
  },
  {
    id: 'agent-09',
    level: '中',
    difficulty: '高难',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: '评估一套 RAG 系统效果，通常重点关注哪些指标？',
    options: [
      '召回率/命中率、答案正确性、忠实度（是否基于检索内容）、延迟',
      '代码行数',
      '模型参数量',
      '服务器数量'
    ],
    answer: [0],
    explanation: 'RAG 评估要同时看"检索得对不对"和"回答得好不好"：召回率/命中率衡量检索，答案正确性和忠实度衡量生成，延迟和成本衡量工程可用性。最好有一批带标准答案的评测集。'
  },
  {
    id: 'agent-10',
    level: '低',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'MCP Server 的主要职责是什么？',
    options: [
      '训练大模型',
      '把工具、资源、Prompt 以标准协议暴露给 MCP 客户端调用',
      '存储向量',
      '做网络负载均衡'
    ],
    answer: [1],
    explanation: 'MCP Server 负责"提供能力"：把数据库查询、文件读取、API 调用等封装成标准工具，MCP 客户端（如 AI 编程工具）发现并调用。这样工具只需实现一次，多个 AI 客户端都能复用。'
  },
{
    id: 'k8s-21',
    level: '中',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '同一个 Pod 内的多个容器，默认共享哪些资源？',
    options: [
      '共享网络命名空间和挂载的存储卷，文件系统和进程空间默认隔离',
      '共享所有容器的文件系统',
      '默认共享 PID 命名空间，可以互相看到进程',
      '完全不共享任何资源'
    ],
    answer: [0],
    explanation: 'Pod 是“共享网络和存储的容器组”：容器之间可以通过 localhost 通信，可以挂载同一个 Volume。文件系统和进程空间默认是隔离的；如果确实需要看到彼此进程，可以开启 shareProcessNamespace。'
  },
  {
    id: 'k8s-22',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'Deployment 滚动更新一直卡住，最可能的原因是什么？',
    options: [
      '新 Pod 的 readinessProbe 一直不通过',
      '旧 Pod 没有被删除',
      'Service 没有 ClusterIP',
      '没有配置 Ingress'
    ],
    answer: [0],
    explanation: '滚动更新会等新 Pod 进入 Ready 才继续替换旧 Pod。readiness 一直失败常见于镜像启动失败、探针路径或端口写错、资源不足、PDB 限制。用 kubectl rollout status 和 describe pod 看卡在哪一步。'
  },
  {
    id: 'k8s-23',
    level: '高',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'multiple',
    question: 'Service 访问不通，应该重点检查哪些点？',
    options: [
      'Service 的 selector 是否匹配 Pod 标签',
      'Endpoints 是否有就绪的 Pod',
      'targetPort 是否和容器实际监听端口一致',
      'NetworkPolicy、kube-proxy、DNS 是否正常'
    ],
    answer: [0, 1, 2, 3],
    explanation: '排查顺序通常是：先看 Endpoints 有没有后端，再看 selector 和 Pod 标签、targetPort 和容器端口，最后查 NetworkPolicy、kube-proxy、CoreDNS 和 Pod 内网络。不要一上来就重装集群。'
  },
  {
    id: 'k8s-24',
    level: '中',
    difficulty: '高难',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: '执行 helm upgrade 后 Pod 没有任何变化，最可能的原因是什么？',
    options: [
      'values 没生效，或镜像 tag 没变导致节点复用了旧镜像',
      'Helm 不支持升级 Deployment',
      'Kubernetes 不支持滚动更新',
      '必须先删除 Release 才能升级'
    ],
    answer: [0],
    explanation: '先 helm get values 看配置是否真的传进去了，再 helm template 看渲染后的镜像 tag 和配置。如果 tag 没变、imagePullPolicy 又是 IfNotPresent，节点会继续用旧镜像，看起来就像“没升级”。'
  },
  {
    id: 'k8s-25',
    level: '低',
    difficulty: '进阶',
    category: 'Kubernetes / Helm',
    type: 'single',
    question: 'PodDisruptionBudget（PDB）的作用是什么？',
    options: [
      '限制自愿中断时最少可用副本，避免驱逐或升级把服务打挂',
      '限制容器 CPU 使用',
      '自动扩容 Pod',
      '加密 Secret'
    ],
    answer: [0],
    explanation: 'PDB 通过 minAvailable 或 maxUnavailable 约束自愿中断（节点维护、驱逐、升级），保证操作期间仍有足够副本。它不约束节点宕机这类非自愿中断，所以不能替代多副本和反亲和。'
  },
  {
    id: 'dev-13',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'single',
    question: '蓝绿发布和金丝雀发布的核心区别是什么？',
    options: [
      '蓝绿是两套环境整体切换，金丝雀是按流量比例逐步放量',
      '蓝绿只能用于数据库',
      '金丝雀必须一次性全量',
      '两者完全一样'
    ],
    answer: [0],
    explanation: '蓝绿准备两套完整环境，验证后把流量整体切到新版本，回滚就是切回去；金丝雀先把少量流量给新版本，观察指标正常再逐步扩大。蓝绿切换快但资源翻倍，金丝雀更平滑但需要流量治理。'
  },
  {
    id: 'dev-14',
    level: '中',
    difficulty: '进阶',
    category: 'DevOps / CI-CD',
    type: 'multiple',
    question: 'CI/CD 中管理密钥，正确的做法包括哪些？',
    options: [
      '使用 CI/CD 平台提供的 Secret 变量',
      '使用 Kubernetes Secret 或 Vault 等密钥管理服务',
      '避免在日志和构建输出中打印密钥',
      '把密钥明文写进 Jenkinsfile'
    ],
    answer: [0, 1, 2],
    explanation: '密钥不能进代码仓库，也不能出现在日志里。CI 用平台 Secret，运行时用 K8s Secret 或 Vault，并配合权限控制和轮换。明文写进 Jenkinsfile 是最典型的低级错误。'
  },
  {
    id: 'fe-13',
    level: '中',
    difficulty: '高难',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'Vue 2 中 this.$set 能触发视图更新，根本原因是什么？',
    options: [
      '它手动给新增属性定义 getter/setter，并通知依赖更新',
      '它强制刷新整个浏览器',
      '它调用了 location.reload',
      '它把整个对象转成 JSON'
    ],
    answer: [0],
    explanation: 'Vue 2 用 Object.defineProperty 劫持已有属性，新增属性没有 getter/setter，所以直接赋值不会触发更新。$set 会对新属性调用 defineReactive，并通过 ob.dep.notify() 通知渲染 watcher。'
  },
  {
    id: 'fe-14',
    level: '低',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'Vue 3 的 shallowRef 适合什么场景？',
    options: [
      '只关心整体替换、不需要深层响应式的大对象或第三方实例',
      '所有基本类型',
      '需要深层监听的嵌套对象',
      '替代 vue-router'
    ],
    answer: [0],
    explanation: 'shallowRef 只追踪 .value 的整体替换，内部属性变化不会触发更新。适合地图实例、大表格、第三方库对象，避免 Proxy 深层代理带来的性能开销。需要深层响应时用 ref 或 reactive。'
  },
  {
    id: 'fe-15',
    level: '中',
    difficulty: '进阶',
    category: '前端 Vue / TS',
    type: 'single',
    question: 'TypeScript 中 unknown 和 any 的关键区别是什么？',
    options: [
      'unknown 更安全，使用前必须做类型收窄；any 直接跳过类型检查',
      '两者完全一样',
      'unknown 只能存字符串',
      'any 不能赋值给其他类型'
    ],
    answer: [0],
    explanation: 'any 相当于关闭类型检查，什么操作都允许；unknown 表示“类型未知”，可以接收任何值，但使用前必须先判断类型（typeof、instanceof、类型守卫）。不确定类型时优先用 unknown。'
  },
  {
    id: 'node-11',
    level: '中',
    difficulty: '高难',
    category: 'Node.js / Python',
    type: 'single',
    question: 'process.nextTick 和 setImmediate 的执行时机有什么区别？',
    options: [
      'nextTick 在当前操作结束后、事件循环继续前执行；setImmediate 在 check 阶段执行',
      '两者完全一样',
      'setImmediate 一定比 nextTick 更早',
      'nextTick 只在浏览器有效'
    ],
    answer: [0],
    explanation: 'nextTick 回调放在当前调用栈清空后立即执行，优先级高于 Promise 微任务之外的常规阶段；setImmediate 在事件循环的 check 阶段执行。递归 nextTick 会饿死 IO，要避免。'
  },
  {
    id: 'node-12',
    level: '中',
    difficulty: '进阶',
    category: 'Node.js / Python',
    type: 'single',
    question: 'Node 服务内存持续上涨，以下哪项通常不是原因？',
    options: [
      '全局缓存没有淘汰策略',
      '事件监听器或定时器没有移除',
      '闭包长期持有大对象',
      '使用了 const 声明变量'
    ],
    answer: [3],
    explanation: 'const 只是声明方式，和内存泄漏无关。常见泄漏原因是无上限缓存、未移除的监听器/定时器、闭包持有大对象、全局数组不断 push。排查可以用 heap snapshot 对比对象增长。'
  },
  {
    id: 'agent-11',
    level: '低',
    difficulty: '高难',
    category: 'AI Agent / RAG / MCP',
    type: 'single',
    question: 'RAG 混合检索中的 RRF（Reciprocal Rank Fusion）作用是什么？',
    options: [
      '把多路检索结果的排名融合成一个综合排名',
      '把文本转成图片',
      '训练大模型',
      '压缩向量维度'
    ],
    answer: [0],
    explanation: 'RRF 不需要统一不同检索器的分数量纲，而是根据每路结果中的排名计算融合分数（常见公式是 1/(k+rank) 求和），把向量检索、关键词检索等多路结果合并成一个更稳的排序。'
  },
  {
    id: 'agent-12',
    level: '中',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'multiple',
    question: '防止 AI Agent 调用工具陷入死循环，常用哪些手段？',
    options: [
      '设置最大步数和超时',
      '检测重复状态或重复调用',
      '关键操作人工确认',
      '完全不限制，让它自由发挥'
    ],
    answer: [0, 1, 2],
    explanation: 'Agent 必须有边界：最大步数、超时、重复调用检测、工具白名单、危险操作人工确认、失败降级。完全放开不仅会烧 token，还可能重复执行写操作造成数据问题。'
  },
  {
    id: 'agent-13',
    level: '中',
    difficulty: '进阶',
    category: 'AI Agent / RAG / MCP',
    type: 'multiple',
    question: 'Prompt 注入的典型风险包括哪些？',
    options: [
      '用户输入覆盖系统指令',
      '诱导 Agent 调用越权工具',
      '泄露系统提示词或敏感数据',
      '让模型输出更长的文本'
    ],
    answer: [0, 1, 2],
    explanation: 'Prompt 注入的核心是“把不可信输入当成指令执行”。风险包括覆盖系统提示、越权调用工具、泄露提示词或数据。防护要做输入隔离、权限最小化、工具白名单、输出审查和人工确认。'
  },
  {
    id: 'sys-11',
    level: '高',
    difficulty: '进阶',
    category: '系统设计与排障',
    type: 'single',
    question: '缓存穿透、缓存击穿、缓存雪崩，正确对应的是？',
    options: [
      '查不存在的数据 / 热点 key 过期 / 大量 key 同时过期',
      '大量 key 同时过期 / 查不存在的数据 / 热点 key 过期',
      '热点 key 过期 / 大量 key 同时过期 / 查不存在的数据',
      '三者完全一样'
    ],
    answer: [0],
    explanation: '穿透：查数据库里也不存在的数据，缓存永远不命中，用空值缓存或布隆过滤器；击穿：某个热点 key 过期瞬间大量请求打到数据库，用互斥锁或逻辑过期；雪崩：大量 key 同时过期或 Redis 故障，用随机过期、多级缓存、高可用。'
  },
  {
    id: 'sys-12',
    level: '中',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: 'Redisson 分布式锁的“看门狗”机制作用是什么？',
    options: [
      '业务未执行完时自动给锁续期，避免锁提前过期',
      '监控 CPU 使用率',
      '自动扩容 Redis',
      '加密 Redis 数据'
    ],
    answer: [0],
    explanation: '看门狗默认每 10 秒把锁续期到 30 秒，前提是锁由当前线程持有且没有主动释放。如果手动设置了很长的 leaseTime，看门狗可能不生效。业务异常时要确保 finally 里释放锁。'
  },
  {
    id: 'sys-13',
    level: '中',
    difficulty: '高难',
    category: '系统设计与排障',
    type: 'single',
    question: '分库分表后，跨库分页和聚合查询的常见解决方案是什么？',
    options: [
      '冗余宽表、Elasticsearch 检索、聚合服务或数据同步',
      '直接 join 所有库',
      '关闭分库分表',
      '只查一个库'
    ],
    answer: [0],
    explanation: '分库分表后不能简单跨库 join。常见做法是宽表冗余、ES 做检索和聚合、单独聚合服务汇总、或通过 binlog 同步到查询库。跨库分页通常要拿足够多的数据再内存排序，或改用游标。'
  },
  {
    id: 'mon-09',
    level: '低',
    difficulty: '高难',
    category: '监控与日志',
    type: 'single',
    question: 'Prometheus 指标“高基数”（high cardinality）的主要危害是什么？',
    options: [
      '标签值组合过多导致内存和存储暴涨、查询变慢',
      '让 CPU 温度变高',
      '自动删除指标',
      '让 Grafana 无法启动'
    ],
    answer: [0],
    explanation: '每个不同的标签组合都是一条独立时间序列。把 user_id、request_id、完整 URL 这类无限值放进 label，会导致序列数量爆炸、内存和存储飙升、查询变慢。应做聚合、用日志或直方图替代。'
  },
  {
    id: 'priv-11',
    level: '高',
    difficulty: '高难',
    category: '私有化交付',
    type: 'single',
    question: '私有化升级失败且数据已经变更，最稳妥的处理顺序是什么？',
    options: [
      '先停止写入、评估影响，回滚应用版本；数据用升级前备份恢复或执行回滚脚本，验证后再恢复流量',
      '直接删库重装',
      '继续升级直到成功',
      '只回滚镜像，不管数据'
    ],
    answer: [0],
    explanation: '升级前必须备份并准备回滚脚本。失败后先停止写入防止数据继续变化，再回滚应用；如果涉及表结构或数据变更，用备份恢复或执行回滚脚本，验证核心接口后再放流量。顺序错了可能造成数据二次损坏。'
  },
  {
    id: 'open-01',
    level: '高',
    difficulty: '基础',
    category: '口述与项目',
    type: 'open',
    question: '请用 1 分钟做一个自我介绍，重点说明你与这个岗位的匹配度。',
    options: [],
    answerText: '1. 我有多年全栈开发经验，主力 Java/Spring Boot，前端 Vue2，做过企业级 Web 和 APP 项目。\n2. 做过资源管理、GIS 地图、移动端项目，负责接口设计、数据库优化、Redis 缓存、ES 检索和 K8s 部署。\n3. 我深度使用 Claude Code 做需求拆解、代码生成、重构和排障，也做过个人小工具。\n4. 这个岗位需要全栈 + K8s 私有化 + AI First，我的经历覆盖后端、前端、部署和 AI 辅助开发。\n5. 我希望把 AI 工程化和云原生交付做深，能独立对交付结果负责。',
    explanation: '记忆口诀：背景 → 项目 → AI/云原生 → 匹配岗位。控制在 60-90 秒，不要背简历，要主动往 JD 的三条主线上靠。'
  },
  {
    id: 'open-02',
    level: '高',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '请介绍你最近做的一个项目，你在其中负责什么？',
    options: [],
    answerText: '1. 背景：某企业级资源管理平台，解决资源分散、地图展示和移动端查询的问题。\n2. 我的职责：全栈开发，负责接口、数据库优化、地图页面、APP 页面和部署。\n3. 技术方案：Spring Boot + MyBatis + Oracle/MySQL，Redis 缓存，ES 做地址检索，Vue2 + Vant + OpenLayers，K8s 部署。\n4. 难点：大数据量分页、地图性能、APP WebView 兼容。\n5. 结果：接口耗时从 X 降到 Y，页面加载明显提升，支撑 N 个用户或资源点（用真实数字）。\n6. 复盘：如果重做，我会更早做监控和自动化测试。',
    explanation: '记忆口诀：STAR + 数字。只讲自己负责的部分，准备 2 个技术难点追问，结果尽量量化。'
  },
  {
    id: 'open-03',
    level: '高',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: '你如何用 Claude Code 完成一个复杂需求？请举一个真实例子。',
    options: [],
    answerText: '1. 场景：某移动端 APP 需要新增一个地图查询功能，涉及后端接口、Vue2 页面、OpenLayers 和权限。\n2. 我先让 Claude Code 读 CLAUDE.md 和相关文件，输出改动计划和影响范围，我确认后再动手。\n3. 按“接口 → 服务 → 页面 → 联调”拆成小任务，每步要求它跑测试或给出验证命令。\n4. 生成后我重点审查 SQL 注入、权限、空值、分页和地图内存泄漏，再自己改关键逻辑。\n5. 结果：原本 2 天的工作约 1 天完成，返工主要集中在边界条件和样式。\n6. 我的结论：AI 提效来自“拆得清 + 上下文准 + 验收严”，不是一句 prompt 就完事。',
    explanation: '记忆口诀：计划 → 拆解 → 执行 → 审查 → 结果 → 反思。一定要有真实例子和数字，也要主动说 AI 哪里出过错。'
  },
  {
    id: 'open-04',
    level: '高',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '你如何审查 AI 生成的代码？请说出你的检查清单。',
    options: [],
    answerText: '1. 安全：SQL 注入、越权、密钥硬编码、依赖漏洞、日志泄露。\n2. 正确性：边界值、空值、并发、事务、幂等、异常处理。\n3. 性能：索引、N+1、循环查库、内存和锁。\n4. 可维护性：命名、分层、重复代码、可测试性、是否符合项目规范。\n5. 工程验证：单测/接口测试、静态扫描、镜像扫描、灰度。\n6. 对 AI 代码额外看：有没有编造不存在的 API、有没有偷偷改无关文件。',
    explanation: '记忆口诀：安全 → 正确 → 性能 → 可维护 → 验证。每一层准备一个你实际遇到过的例子。'
  },
  {
    id: 'open-05',
    level: '高',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '你如何做上下文管理和任务拆解？',
    options: [],
    answerText: '1. 上下文：只给相关文件、接口、表结构、报错和规范；项目级约束写进 CLAUDE.md。\n2. 任务：按“可独立验证”拆成小步，每步有明确输入、输出和验收命令。\n3. 计划：复杂任务先让 AI 出方案和影响范围，我确认后再改。\n4. 执行：一次只做一件事，改完立即跑测试，不堆积。\n5. 记忆：把决策、待办、接口约定写进 PLAN.md，长任务持续引用。\n6. 收尾：让 AI 自查 diff，我再做最终 review。',
    explanation: '记忆口诀：精准上下文、可验证拆解、先计划、小步执行、文件化记忆、diff 自查。'
  },
  {
    id: 'open-06',
    level: '高',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: '讲一次你排查线上故障的经历。',
    options: [],
    answerText: '1. 现象：监控告警接口 5xx 或 RT 飙升，或客户反馈页面打不开。\n2. 止血：先回滚最近发布、限流、扩容或降级，保证核心业务。\n3. 定位：看监控指标 → 日志和 traceId → 数据库/Redis/MQ/下游 → 最近变更。\n4. 常见根因：慢 SQL、连接池耗尽、缓存击穿、MQ 积压、Pod OOM、证书过期。\n5. 修复：改配置、加索引、扩容或回滚，验证核心接口和错误率。\n6. 复盘：补监控、补预案、补测试，明确责任人和时间。',
    explanation: '记忆口诀：止血 → 定位 → 修复 → 验证 → 复盘。先讲结果和影响，再讲过程；不要只说“重启就好了”。'
  },
  {
    id: 'open-07',
    level: '高',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: 'Kubernetes 里 Pod 起不来，你会怎么排查？',
    options: [],
    answerText: '1. 先看状态：Pending、CrashLoopBackOff、ImagePullBackOff、OOMKilled、Running 但不 Ready。\n2. describe pod 看 Events：调度失败、镜像拉取、探针失败、资源不足、挂载失败。\n3. logs 和 logs --previous 看应用启动日志。\n4. 查配置：镜像 tag、环境变量、ConfigMap/Secret、端口、探针路径。\n5. 查依赖：数据库/Redis/MQ 是否可达，PVC 是否绑定，网络策略。\n6. 修复后 rollout status 验证，必要时回滚。',
    explanation: '记忆口诀：状态 → Events → 日志 → 配置 → 依赖 → 验证。每类状态给一个典型原因。'
  },
  {
    id: 'open-08',
    level: '高',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: '如果让你负责一个客户的私有化交付，你会怎么规划？',
    options: [],
    answerText: '1. 先确认客户环境：操作系统、CPU/内存/磁盘、K8s 版本、网络、是否有外网、是否有 Harbor。\n2. 交付物：镜像、Helm Chart、values、安装/升级/回滚脚本、部署文档、检查清单。\n3. 离线准备：docker save/load 或离线 Harbor，依赖包提前打进镜像。\n4. 部署：命名空间隔离、Secret、PVC、资源限制、探针、Ingress。\n5. 验证：健康检查、核心接口冒烟、监控告警、日志采集。\n6. 升级与回滚：先备份，再升级，失败 helm rollback 加数据恢复。\n7. 交付后：培训、巡检、问题响应机制。',
    explanation: '记忆口诀：环境 → 交付物 → 离线 → 部署 → 验证 → 升级回滚 → 运维。强调“可重复、可回滚、可验证”。'
  },
  {
    id: 'open-09',
    level: '中',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '描述你设计过的一条 CI/CD 流水线。',
    options: [],
    answerText: '1. 触发：Git push 或 Merge Request 触发流水线。\n2. 构建：拉代码、装依赖、编译、单测、静态扫描。\n3. 打包：构建镜像，tag 用版本号或 commit hash，推 Harbor。\n4. 部署：Helm upgrade 到测试环境，跑冒烟测试。\n5. 审批：生产发布需要人工审批或变更单。\n6. 生产：分批或金丝雀发布，观察错误率和延迟。\n7. 回滚：失败自动或一键 helm rollback。\n8. 通知：企业微信或邮件通知结果。',
    explanation: '记忆口诀：触发 → 构建 → 测试 → 镜像 → 部署 → 审批 → 灰度 → 回滚 → 通知。说出每个环节失败会怎样。'
  },
  {
    id: 'open-10',
    level: '中',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: '你会如何设计一个高可用系统？',
    options: [],
    answerText: '1. 消除单点：多副本、主从或集群、负载均衡。\n2. 流量治理：限流、熔断、降级、超时、重试（注意幂等）。\n3. 数据：备份、主从切换、灾备、定期恢复演练。\n4. 部署：反亲和、多可用区、PDB、滚动更新。\n5. 可观测：监控、日志、链路、告警。\n6. 预案：故障演练、容量评估、值班和升级机制。',
    explanation: '记忆口诀：冗余 → 治理 → 数据 → 部署 → 可观测 → 预案。不要只堆技术名词，要说明解决什么故障。'
  },
  {
    id: 'open-11',
    level: '高',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '你如何保证缓存和数据库的一致性？',
    options: [],
    answerText: '1. 读多写少用 Cache Aside：读未命中查库回写，写先更新库再删缓存。\n2. 为什么删缓存而不是更新：并发下更新缓存容易产生旧值覆盖。\n3. 极端并发用延迟双删，或订阅 binlog 异步删除。\n4. 缓存击穿用互斥锁或逻辑过期；穿透用空值缓存或布隆过滤器；雪崩用随机过期和多级缓存。\n5. 接受最终一致，关键业务以数据库为准。\n6. 做好监控：命中率、延迟、脏数据告警。',
    explanation: '记忆口诀：先库后删缓存、延迟双删/binlog、三兄弟防护、最终一致。能画出读写流程最好。'
  },
  {
    id: 'open-12',
    level: '中',
    difficulty: '高难',
    category: '口述与项目',
    type: 'open',
    question: '你如何保证消息不丢、不重复？',
    options: [],
    answerText: '1. 生产者：开启 confirm，失败重发；本地消息表或事务消息保证业务和消息一致。\n2. Broker：交换机、队列、消息持久化，集群多副本。\n3. 消费者：手动 ack，业务成功再确认；失败进入重试或死信队列。\n4. 幂等：唯一索引、去重表、状态机、业务 token。\n5. 顺序：单队列单消费者，或按业务键分区。\n6. 积压：扩消费者、限流、降级、临时转存。',
    explanation: '记忆口诀：生产确认 → 持久化 → 手动 ack → 幂等 → 顺序 → 积压。三个环节缺一不可。'
  },
  {
    id: 'open-13',
    level: '中',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '你的 Vue2 项目做过哪些性能优化？',
    options: [],
    answerText: '1. 路由懒加载，按需引入组件和 Vant。\n2. 图片压缩、WebP、懒加载，字体子集化。\n3. 列表虚拟滚动或分页，避免一次渲染大量 DOM。\n4. 减少不必要的响应式数据，复杂对象用 Object.freeze。\n5. 地图：销毁实例、移除监听、聚合点位、按缩放级别加载。\n6. 缓存：webpack 文件 hash、CDN、HTTP 缓存。\n7. 监控：首屏时间、接口耗时、白屏率。',
    explanation: '记忆口诀：加载 → 资源 → 渲染 → 响应式 → 地图 → 缓存 → 监控。结合你的真实项目讲。'
  },
  {
    id: 'open-14',
    level: '高',
    difficulty: '进阶',
    category: '口述与项目',
    type: 'open',
    question: '你主力是 Java，为什么能胜任需要 Node/Python 的岗位？',
    options: [],
    answerText: '1. 我有多年 Java 后端经验，Spring、MyBatis、事务、并发、JVM 排障这些底层能力是通用的。\n2. 前端 Vue2 生产经验让我能独立做全栈，理解接口和页面联调。\n3. Node 与 JavaScript 同语言，上手成本低，适合做 BFF、工具链和 IO 密集型服务。\n4. Python 适合脚本、自动化和 AI 相关服务，我能快速补。\n5. 我不会假装是 Node 专家，但我能独立交付，并且有 Java 的工程化底子。\n6. 入职后会先用一个真实项目把 Node/Python 补到生产级。',
    explanation: '记忆口诀：通用能力 → 全栈 → Node 优势 → Python 场景 → 诚实 → 补强计划。不要硬编项目经验。'
  },
  {
    id: 'open-15',
    level: '中',
    difficulty: '基础',
    category: '口述与项目',
    type: 'open',
    question: '你未来 1-3 年的职业规划是什么？',
    options: [],
    answerText: '1. 短期 1 年：快速熟悉业务和技术栈，独立承担模块，把 AI 辅助研发流程用起来。\n2. 中期 2-3 年：成为能独立负责私有化交付和云原生运维的全栈工程师，能带小项目。\n3. 长期：在 AI 工程化或智能运维方向做深，能沉淀规范和工具。\n4. 我希望在团队里承担“能把事交付掉”的角色，而不是只写代码。',
    explanation: '记忆口诀：1 年立足 → 2-3 年独立交付 → 长期 AI 工程化。规划要贴合岗位，不要说“想转管理”。'
  },
  {
    id: 'open-16',
    level: '中',
    difficulty: '基础',
    category: '口述与项目',
    type: 'open',
    question: '面试最后，你有什么问题想问我们？',
    options: [],
    answerText: '1. 团队目前最急需解决的问题是什么？入职后我先接手哪块？\n2. 团队的 K8s 或私有化交付流程现在是什么样，有哪些痛点？\n3. AI 编程工具在团队里的使用程度如何，有没有规范？\n4. 这个岗位的成长路径和考核重点是什么？\n5. 后续面试流程和时间安排？',
    explanation: '记忆口诀：业务痛点 → 入职职责 → 技术现状 → 成长路径 → 流程。薪资和加班留到 HR 环节。'
  }
];
