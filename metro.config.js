const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const config = getDefaultConfig(__dirname)

// 절대 경로 설정
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@/shared': path.resolve(__dirname, 'src/shared'),
  '@/pages': path.resolve(__dirname, 'src/pages'),
  '@/widgets': path.resolve(__dirname, 'src/widgets'),
  '@/features': path.resolve(__dirname, 'src/features'),
  '@/entities': path.resolve(__dirname, 'src/entities'),
  '@/app': path.resolve(__dirname, 'src/app'),
}

module.exports = withNativeWind(config, {
  input: './global.css',
})
