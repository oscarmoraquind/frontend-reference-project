import React from 'react';
import styles from './early-access.module.scss';
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Provider,
  Text,
  TextField,
  View,
} from '@adobe/react-spectrum';
import Bug from '@spectrum-icons/workflow/Bug';
import IsoLogo from '../../assets/isologo.svg';
import { NavigatorState } from '@ondemandmarket/models';

/* eslint-disable-next-line */
export interface EarlyAccessProps {
  navigator: NavigatorState;
}

export function EarlyAccess({ navigator }: EarlyAccessProps) {
  return (
    <Grid
      areas={{
        base: [
          'logo',
          'header',
          'preview',
          'content',
          'features',
          'tools',
          'footer',
        ],
        M: [
          'logo',
          'header',
          'preview',
          'content',
          'features',
          'tools',
          'footer',
        ],
        L: [
          'logo logo',
          'header preview',
          'content content',
          'features features',
          'tools tools',
          'footer footer',
        ],
      }}
      columns={{
        L: ['1fr', '1fr'],
      }}
      rows={{
        L: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
      }}
      gap="size-0"
    >
      <View gridArea="logo">
        <Image src={IsoLogo} width={180}></Image>
      </View>
      <View
        gridArea="header"
        paddingEnd="size-200"
        alignSelf="center"
        marginBottom="size-350"
      >
        <Flex direction="column" gap="size-100">
          <Heading level={1}>
            <i className={styles['header--title']}>
            Optimizando la gestión de equipos de tecnología
            </i>
          </Heading>
          <p>
            Una nueva plataforma para optimizar la asignación y programación de personal en operaciones.
          </p>
          <View>
            <Flex
              direction={{
                base: 'column',
                M: 'row',
              }}
              gap="size-100"
            >
              <Button
                variant="primary"
                style="fill"
                onPress={() => navigator.goToRegister?.()}
              >
                <Text>Consigue acceso anticipado</Text>
              </Button>
            </Flex>
          </View>
        </Flex>
      </View>
      <View gridArea="preview" justifySelf="center" width="100%">
        <Grid
          areas={[
            'preview-1 preview-3 preview-6',
            'preview-1 preview-3 preview-6',
            'preview-1 preview-3 preview-6',
            'preview-1 preview-4 preview-6',
            'preview-2 preview-4 preview-7',
            'preview-2 preview-5 preview-7',
            'preview-2 preview-5 preview-7',
          ]}
          columns={['1fr', '1fr', '1fr']}
          rows={['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
          gap="size-200"
          maxWidth="600px"
          margin="auto"
        >
          <View
            gridArea="preview-1"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="end"
          >
            <Flex
              direction="column"
              minHeight="230px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 1
            </Flex>
          </View>
          <View
            gridArea="preview-2"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="start"
          >
            <Flex
              direction="column"
              minHeight="200px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 2
            </Flex>
          </View>
          <View
            gridArea="preview-3"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="end"
          >
            <Flex
              direction="column"
              minHeight="200px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 3
            </Flex>
          </View>
          <View
            gridArea="preview-4"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="center"
          >
            <Flex
              direction="column"
              minHeight="90px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 4
            </Flex>
          </View>
          <View
            gridArea="preview-5"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="center"
          >
            <Flex
              direction="column"
              minHeight="280px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 5
            </Flex>
          </View>
          <View
            gridArea="preview-6"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="end"
          >
            <Flex
              direction="column"
              minHeight="180px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 6
            </Flex>
          </View>
          <View
            gridArea="preview-7"
            backgroundColor="gray-50"
            borderRadius="large"
            alignSelf="start"
          >
            <Flex
              direction="column"
              minHeight="200px"
              justifyContent="center"
              alignItems="center"
            >
              Preview 7
            </Flex>
          </View>
        </Grid>
      </View>
      <View gridArea="features" paddingTop="size-600">
        <Divider size="S" />
        <Flex direction="column" alignItems="center">
          <Heading level={2}>
            <p className={styles['features--title']}>
              All-in-one <br /> Plataforma de seguimiento de la operación
            </p>
          </Heading>
          <p className={styles['tools-content']}>
            La mejor experiencia enriquecida por inteligencia artificial
          </p>
        </Flex>
      </View>
      <View gridArea="tools" marginTop="size-600">
        <Flex wrap="wrap" justifyContent="center" rowGap="size-600">
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Gestión inteligente</p>
            </Heading>
            <p className={styles['tools--content']}>
              Gestión inteligente de equipos de trabajo para una asignación óptima de tareas.
            </p>
          </Flex>
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Programación óptima</p>
            </Heading>
            <p className={styles['tools--content']}>
            Programación óptima de personal operativo según habilidades y disponibilidad.
            </p>
          </Flex>
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Asignación eficiente</p>
            </Heading>
            <p className={styles['tools--content']}>
            Asignación eficiente de recursos humanos a proyectos específicos.
            </p>
          </Flex>
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Planificación estratégica</p>
            </Heading>
            <p className={styles['tools--content']}>
            Planificación estratégica de fuerza laboral considerando demanda y crecimiento.
            </p>
          </Flex>
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Cumplimiento normativo</p>
            </Heading>
            <p className={styles['tools--content']}>
            Cumplimiento de normativas laborales en la generación de programaciones.
            </p>
          </Flex>
          <Flex
            direction="column"
            width={{
              L: 'calc(100% / 3)',
            }}
            maxWidth="380px"
            alignItems="center"
          >
            <View>
              <span className={styles['tools--icon']}>
                <Bug aria-label="Bug" />
              </span>
            </View>
            <Heading level={3}>
              <p className={styles['tools--title']}>Productividad inteligente</p>
            </Heading>
            <p className={styles['tools--content']}>
            Maximizando productividad operativa con análisis avanzado de datos.
            </p>
          </Flex>
        </Flex>
      </View>
      <View
        gridArea="footer"
        paddingTop="size-600"
        marginTop="size-400"
        marginX="calc((100% - 100vw)/2)"
      >
        <Provider colorScheme="dark">
          <Flex
            width={{
              S: '640px',
              M: '768px',
              L: '1024px',
              XL: '1280px',
              XXL: '1536px',
            }}
            margin="auto"
            direction="column"
          >
            <Heading level={3}>
              <p className={styles['footer--title']}>
                Trabaja ágilmente con Quind - Tracking Operation Teams
              </p>
            </Heading>
            <p className={styles['footer--content']}>
            La mejor experiencia enriquecida con increíbles Aplicaciones, regístrate para acceso temprano a la plataforma
            </p>
            <View>
              <Button
                variant="primary"
                style="fill"
                onPress={() => navigator.goToRegister?.()}
              >
                <Text>Registrarse</Text>
              </Button>
            </View>
            <Flex justifyContent="center" alignItems="center" gap="size-100">
              <View flexGrow={1}>
                <Divider size="S" />
              </View>
              <Image flexGrow={0} src={IsoLogo} width={100}></Image>
              <View flexGrow={1}>
                <Divider size="S" />
              </View>
            </Flex>
            <Flex justifyContent="space-between">
              <p>© Quind 2023. Made with love by Quind</p>
              <p>
              Para más detalles, envíe un correo a{' '}
                <a href="email:teams@quind.io">
                  teams@quind.io
                </a>
              </p>
            </Flex>
          </Flex>
        </Provider>
      </View>
    </Grid>
  );
}

export default EarlyAccess;
