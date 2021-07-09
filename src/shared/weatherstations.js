export const WEATHERSTATIONS = [
  {
    id: 0,
    dataset: 2017,
    wmo: 725090,
    name: 'Boston Logan Intl, MA, USA',
    latitude: '42.361', // positive is North
    longitude: '-71.011', // positive is East
    elevation: 12,
    standardPressure: 14.69,
    timeZone: -5,
    period: {
      start: 1990,
      end: 2014
    },
    wban: 14739,
    annualHeating: {
      coldestMonth: 1,
      heatingDryBulb99_6: 8.5,
      headingDryBulb99: 13.4,
      coldestMonthWindSpeed0_4: {
        windSpeed: 31.7,
        meanCoincidentDryBulb: 37.8
      },
      coldestMonthWindSpeed1: {
        windSpeed: 28.2,
        meanCoincidentDryBulb: 32.1
      },
      prevailingCoincidentWindDirection99_6DryBulb: {
        meanCoincidentWindSpeed: 15.7,
        prevailingCoincidentWindDirection: 290 // 0 = North, 90 = East
      }
    },
    annualHumidification: {
      humidification99_6: {
        dewPoint: -10.7,
        humidityRatio: 3.1,
        meanCoincidentDryBulb: 10.9
      },
      humidification99: {
        dewPoint: -6.0,
        humidityRatio: 4.0,
        meanCoincidentDryBulb: 16.6
      }
    },
    annualCooling: {
      hottestMonth: 7,
      hottestMonthDryBulbRange: 14.8,
      cooling0_4: {
        dryBulb: 90.6,
        meanCoincidentWetBulb: 72.6
      },
      cooling1: {
        dryBulb: 87.6,
        meanCoincidentWetBulb: 71.6
      },
      cooling2: {
        dryBulb: 84.3,
        meanCoincidentWetBulb: 70.0
      },
      prevailingCoincidentWindDirection0_4DryBulb: {
        meanCoincidentWindSpeed: 14.1,
        prevailingCoincidentWindDirection: 240 // 0 = North, 90 = East
      },
      extremeMaxWetBulb: 80.6
    },
    annualEvaporation: {
      evaporation0_4: {
        wetBulb: 75.8,
        meanCoincidentDryBulb: 85.7
      },
      evaporation1: {
        wetBulb: 74.2,
        meanCoincidentDryBulb: 83.0
      },
      evaporation2: {
        wetBulb: 72.7,
        meanCoincidentDryBulb: 80.8
      }
    },
    annualDehumidification: {
      dehumidification0_4: {
        dewPoint: 72.6,
        humidityRatio: 121.0,
        meanCoincidentDryBulb: 80.4
      },
      dehumidification1: {
        dewPoint: 71.3,
        humidityRatio: 115.3,
        meanCoincidentDryBulb: 78.6
      },
      dehumidification0_4: {
        dewPoint: 69.9,
        humidityRatio: 110.1,
        meanCoincidentDryBulb: 77.6
      }
    },
    annualEnthalpy: {
      enthalpy0_4: {
        enthalpy: 39.1,
        meanCoincidentDryBulb: 86.2
      },
      enthalpy1: {
        enthalpy: 37.6,
        meanCoincidentDryBulb: 82.9
      },
      enthalpy2: {
        enthalpy: 36.3,
        meanCoincidentDryBulb: 80.7
      }
    },
    extremeAnnual: {
      windSpeed1: 26.8,
      windSpeed2_5: 24.0,
      windSpeed5: 20.7,
      dryBulb: {
        mean: {
          min: 3.2,
          max: 95.6
        },
        standardDev: {
          min: 4.3,
          max: 3.3
        },
        yearExtreme5: {
          min: 0.1,
          max: 98.0
        },
        yearExtreme10: {
          min: -2.4,
          max: 99.9
        },
        yearExtreme20: {
          min: -4.8,
          max: 101.8
        },
        yearExtreme50: {
          min: -7.9,
          max: 104.2
        }
      },
      wetBulb: {
        mean: {
          min: 1.2,
          max: 78.2
        },
        standardDev: {
          min: 3.9,
          max: 1.4
        },
        yearExtreme5: {
          min: -1.6,
          max: 79.2
        },
        yearExtreme10: {
          min: -3.9,
          max: 80.0
        },
        yearExtreme20: {
          min: -6.1,
          max: 80.8
        },
        yearExtreme50: {
          min: -8.9,
          max: 81.8
        }
      }
    }
  }
]