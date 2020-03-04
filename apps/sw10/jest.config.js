module.exports = {
  name: 'sw10',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw10',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
