import {
    AccessoriesAllowed,
    ArmorAllowed,
    WeaponsAllowed
} from "./data";

export default interface CustomGameData {
    startingRank?: number;
    startingLevel?: number;
    DefaultArmorId?: string;
    DefaultAccessoryId?: string;
    DefaultWeaponId?: string;
    Rarity?: number;
    _class?: number;
    IsRecruitable?: number;
    IsUnlockedByDefault?: number;
    IsSecret?: number;
    IsInMetaEvent?: number;
    Name: string;
    m_Name: string;
    LongName: string;
    Gender: number;


    stats?: StatsData;
    RoleAffinities?: KeyRoleAffinities;
    AccessoriesAllowed?: AccessoriesAllowed;
    WeaponsAllowed?: WeaponsAllowed;
    ArmorAllowed?: ArmorAllowed;

    RankProgression?: RankProgression[];
    VillaStats?: VillaStats[];
    RoleTextKeys: string[];
    SkillsIds?: string[];
    PerksIds?: string[];
}

interface StatsData {
    MinLevel: number;
    MaxLevel: number;
    BaseVitality: StatsDefault;
    BaseAttack: StatsDefault;
    BaseDefense: StatsDefault;
    BaseDetection: StatsDefault;
    BaseDodge: StatsDefault;
    BaseMiss: StatsDefault;
    BaseVigilence: StatsDefault;
    BaseLethality: StatsDefault;
    BaseDexterity: StatsDefault;
    BaseAgility: StatsDefault;
    BaseLuck: StatsDefault;
    BaseCritChance: StatsDefault;
    BaseCritDamage: StatsDefault;

}
interface StatsDefault {
    baseStat: number;
    perLevelGain: number;
}

interface RankProgression {
    DNA: number;
    PromoteTime: number;
    SoftCurrency: number;
}

interface KeyRoleAffinities {
    _serializedMainKeyRole: string;
    _serializedKeyRoleAffinities: SerializedKeyRoleAffinities[];
}

interface SerializedKeyRoleAffinities {
    _keyRoleID: string;
    _affinity: number;
}

interface VillaStats {
    MinLevel: number;
    MaxLevel: number;
    BaseCrafting: StatsDefault;
    BaseProduction: StatsDefault;
    BaseLearning: StatsDefault;
}
