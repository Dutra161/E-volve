from validation import input_validation
from spike import separate_spike, mkdir
import sys
sys.path.append('public/update/evolve')
from evolve import callevolve
from get_pdb import get_pdb
import os
from multiprocessing import cpu_count, Pool
from geral_map import mapping
from data_add import data_att
from map_att import heat_att
def call_evolve(dir):
    callevolve(dir)

basedir = 'public/update/'

if __name__ == '__main__':

    ids = input_validation(basedir,basedir+'data/new-spikes')
    [get_pdb(id,basedir) for id in ids]

    jobs = separate_spike(ids, basedir+'separated.json')

    types = ['Spike-AB-UK','Spike-AB-Africa','Spike-AB-Brazil','Spike-AB-India']

    to_do = []

    projects = []

    for type in types:
        if not os.path.exists(basedir+type):
            os.mkdir(basedir+type)
        projects.extend(mkdir(basedir+type, jobs, basedir+'data/mutations-' + type.split('-')[-1].lower(),basedir))
    print(projects)
    pool = Pool(processes=cpu_count() - 2)
    pool.map(call_evolve, tuple(projects))
    mapping(types[2])
    for type in types:
        data_att(type)
    heat_att()

    


