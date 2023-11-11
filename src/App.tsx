import { useEffect } from 'react';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Reveal from 'reveal.js';
import Bold from './components/Bold';
import Highlight from './components/Highlight';
import Flex from './components/Flex';
import Example1_1 from './assets/images/example-1.1.png';
import Example1_2 from './assets/images/example-1.2.png';
import Example2_1 from './assets/images/example-2.1.png';
import Example2_2 from './assets/images/example-2.2.png';
import Example2_3 from './assets/images/example-2.3.png';
import Example3_1 from './assets/images/example-3.1.png';
import Example3_2 from './assets/images/example-3.2.png';
import Example4_1 from './assets/images/example-4.1.png';
import Example5_1 from './assets/images/example-5.1.png';
import Example6_1 from './assets/images/example-6.1.png';
import Example6_2 from './assets/images/example-6.2.png';
import Example6_3 from './assets/images/example-6.3.png';
import Example7_1 from './assets/images/example-7.1.png';
import Example8_1 from './assets/images/example-8.1.png';

const App: React.FC = () => {
  useEffect(() => {
    const deck = new Reveal({
      backgroundTransition: 'slide',
      transition: 'slide',
    });
    deck.initialize();
  }, []);

  return (
    <div className="reveal" style={{ height: "100vh" }}>
      <div className="slides" data-transition="slide">
        <section data-transition="slide">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            style={{ width: "400px" }}
            className="demo-logo"
          />
          <h2>React.js</h2>
        </section>
  
        <section data-transition="slide">
          <section>
            <h3>Что такое React?</h3>
          </section>
          <section>
            <ul>
              <li>React - JavaScript фреймворк</li>
              <li>Используется для фронтенд-разработки</li>
              <li>Создан и используется Facebook</li>
              <li>Известен за свой виртуальный DOM</li>
            </ul>
          </section>
        </section>

        <section data-transition="slide">
          <section>
            <h3>Основные принципы React'а</h3>
          </section>
          <section>
            <ol>
              <li>Объединённая структура JavaScript и HTML в одном файле (JSX)</li>
              <li>Функциональное программирование</li>
              <li>Виртуальный DOM</li>
              <li>Компонентность</li>
            </ol>
          </section>
        </section>

        <section data-transition="slide">
          <section>
            <h3>JSX синтаксис</h3>
          </section>
          <section>
            <h2><Bold>JavaScript</Bold> и <Bold>HTML</Bold> <i>в одном файле</i></h2>
            <p>JSX расшифровывается как JavaScript и XML</p>
            <Flex>
              <Flex vertical>
                <img height={100} src="https://skillicons.dev/icons?i=html,css,js" />
                <span>Традиционный стак веб-технологий</span>
              </Flex>
              <Flex vertical>
                <img height={100} src="https://skillicons.dev/icons?i=js,css" />
                <span>Стак веб-технологий React'а</span>
              </Flex>
            </Flex>
          </section>
          <section>
            <p><Bold>JSX</Bold> - язык программирования React'а</p>
            <Flex>
              <img width={400} height="100%" src={Example1_1} />
              <img width={400} src={Example1_2} />
            </Flex>
          </section>
          <section>
            <q>React - это <Bold>всего лишь Javascript</Bold></q>
          </section>
        </section>

        <section data-transition="slide">
          <section>
            <h2>Функциональное программирование</h2>
          </section>
          <section>
            <h4>Функциональное программирование</h4>
            <ol>
              <li>Функции - <Bold>компоненты&nbsp;высшего&nbsp;порядка</Bold></li>
              <li>Переменные <Bold>неизменяемые</Bold></li>
              <li>Функции не должны иметь <Bold>побочных&nbsp;эффектов</Bold></li>
            </ol>
          </section>
          <section>
            <h4>Компоненты высшего порядка</h4>
            <p>Это значит, что функции...</p>
            <ol>
              <li>Сохраняются как <Bold>переменные</Bold></li>
              <li>Передаются как <Bold>аргументы</Bold></li>
              <li><Bold>Возвращаются</Bold> из функций</li>
            </ol>
            <Flex>
              <Flex vertical>
                <img width={400} src={Example2_1} />
                <img width={400} src={Example2_2} />
              </Flex>
              <img width={400} src={Example2_3} />
            </Flex>
          </section>
          <section>
            <h4>Компоненты высшего порядка</h4>
            <p>Переменные <Bold>неизменяемые</Bold></p>
            <p>Используйте <Bold>const</Bold> вместо <Bold>let</Bold>, чтобы объявлять переменные</p>
            <Flex vertical>
              <img width={400} src={Example3_1} />
              <img width={400} src={Example3_2} />
            </Flex>
          </section>
          <section>
            <h4>Компоненты высшего порядка</h4>
            <p>Функции не должны иметь <Bold>побочных&nbsp;эффектов</Bold></p>
            <img src={Example4_1} />
          </section>
        </section>
        <section>
          <section>
            <h2>Компоненты</h2>
          </section>
          <section>
            <p>Компоненты - <Bold>функции</Bold> для <Bold>пользовательского интерфейса</Bold></p>
            <p>Математическая функция:<Highlight>→ <Bold>x</Bold>: let y = f(x) → <Bold>number</Bold></Highlight></p>
            <p>Компонентная функция:<Highlight>→<Bold>x</Bold>: let y = {`<FancyDiv value={x} />`} → <Bold>HTML</Bold></Highlight></p>
          </section>
          <section>
            <h4>Анатомия <Bold>компонента</Bold> React</h4>
            <img src={Example5_1} />
          </section>
          <section>
            <h4><Bold>Рендеринг</Bold> компонентов</h4>
            <ul>
              <li>Когда <Bold>выполняется</Bold> функция компонента, мы говорим, что она его <Bold>отрисовывает</Bold> или <Bold>рендерит</Bold></li>
              <li>Предположим, что компоненты могут ререндериться в любое время</li>
              <li>Наша задача - <Bold>гарантировать</Bold>, что каждый раз, когда компонент перерисовывается, он отрисовывается <Bold>корректно</Bold></li>
            </ul>
          </section>
          <section>
            <q>В React'е <Bold>всё является компонентом</Bold></q>
          </section>
        </section>
        <section>
          <section>
            <h2>React-приложение</h2>
          </section>
          <section>
            <h4>Создание нового React-приложения</h4>
            <Flex vertical>
              <img src={Example6_1} />
              <img src={Example6_2} />
            </Flex>
          </section>
          <section>
            <h4>Структура React-приложения</h4>
            <Flex>
              <img src={Example6_3} />
              <ul>
                <li>Папка <Bold>public</Bold> хранит исходные статические ресурсы</li>
                <li><Bold>App</Bold> - это стандартный стартовый <Bold>компонент</Bold></li>
                <li><Bold>index.jsx</Bold> привязывает React к DOM</li>
                <li><Bold>package.json</Bold> настраивает npm зависимости</li>
              </ul>
            </Flex>
          </section>
        </section>
        <section>
          <section>
            <h2>Что такое <Bold>хуки</Bold>?</h2>
          </section>
          <section>
            <Flex>
              <Flex vertical style={{ textAlign: "left" }} justify="space-between">
                <span><Bold>Хуки:</Bold> специальные функции, которые позволяют разработчикам отслеживать <Bold>состояние</Bold> и <Bold>жизненный цикл</Bold> компонентов React'а.</span>
                <span><Bold>Состояние:</Bold> одно или несколько значений, связанных с экземпляром компонента React</span>
                <span><Bold>Жизненный цикл:</Bold> события, связанные с экземпляром компонента React</span>
              </Flex>
              <div>
                <p>Встроенные хуки:</p>
                <ul>
                  <li>useState</li>
                  <li>useEffect</li>
                  <li>useReducer</li>
                  <li>useMemo</li>
                  <li>useRef</li>
                  <li>useCallback</li>
                </ul>
              </div>
            </Flex>
          </section>
          <section>
            <h4>Первый хук: <Bold>useState</Bold></h4>
            <Flex vertical>
              <span>Назначение:</span>
              <ol>
                <li>Запоминать значения внутри себя при каждом ререндеринге</li>
                <li>Сказать React'у выполнить ререндеринг при изменении это значения</li>
              </ol>
              <Flex vertical>
                <span>Синтаксис:</span>
                <img src={Example7_1} />
              </Flex>
            </Flex>
          </section>
          <section style={{ textAlign: "left" }}>
            <h4>Предугадывание состояние</h4>
            <p>Компонент перерисовывается в основном в 2 случаях:</p>
            <ul>
              <li>Значение внутри <Bold>props</Bold> элемента изменяется</li>
              <li>Функция для изменения значения - <Bold>set-функция</Bold> - была вызвана</li>
            </ul>
            <p>Это значит, что все значения, которые отображаются в HTML должны быть зависимы либо от <Bold>props</Bold>, либо от <Bold>useState</Bold></p>
          </section>
          <section>
            <h4>Второй хук: <Bold>useEffect</Bold></h4>
            <Flex vertical style={{ textAlign: "left" }}>
              <span>Назначение: служит наблюдателем за изменением кода в <Bold>массиве зависимостей</Bold> (dependency array)</span>
              <span>Синтаксис:</span>
              <img src={Example8_1} />
            </Flex>
          </section>
        </section>
        <section>
          <Flex vertical align="flex-start">
            <a href="https://react.dev/">Официальный сайт react.dev</a>
            <a href="https://www.cs.unc.edu/~stotts/ISIS/comp523/react-slides.pdf">The university of North Carolina at Chapel Hill</a>
          </Flex>
        </section>
      </div>
    </div>
  )
};

export default App;
