import { describe, expect, test } from 'vitest';
import { homeConvert } from './equations';

describe('homeConvert', () => {
  test('returns null for invalid house size', () => {
    expect(homeConvert('invalid')).toEqual(null);
  });

  test('returns correct exposed wall ratio', () => {
    expect(homeConvert('Single Family House').exposedWall).toEqual(1);
    expect(homeConvert('Manufactured Home').exposedWall).toEqual(1);
    expect(homeConvert('Tiny Home').exposedWall).toEqual(1);
    expect(homeConvert('Apartment or Condo').exposedWall).toEqual(0.25);
    expect(homeConvert('Townhouse').exposedWall).toEqual(0.5);
    expect(homeConvert('Multi-Family').exposedWall).toEqual(0.75);
  });

  test('returns correct exposed ceiling ratio', () => {
    expect(homeConvert('Single Family House').exposedCeiling).toEqual(1);
    expect(homeConvert('Manufactured Home').exposedCeiling).toEqual(1);
    expect(homeConvert('Tiny Home').exposedCeiling).toEqual(1);
    expect(homeConvert('Apartment or Condo').exposedCeiling).toEqual(0);
    expect(homeConvert('Townhouse').exposedCeiling).toEqual(1);
    expect(homeConvert('Multi-Family').exposedCeiling).toEqual(1);
  });
});
